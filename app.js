const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const methodOverride  = require('method-override')
const multer = require('multer')

const Upload1image = require('./models/uploadimg')
const Upload2image = require('./models/uploadimg2')
const Upload3image = require('./models/uploadimg3')
const Upload4image = require('./models/uploadimg4')
const Upload5image = require('./models/uploadimg5')
const Pay = require('./models/Pay')
const Home = require('./models/Home-Admin');
const QueueBookingCustomer = require('./models/Queuebooking-Customer');

//controller
const indexController = require('./controllers/indexController')
const homeUserController = require('./controllers/homeUserController')
const serviceController = require('./controllers/serviceController');
const stockController = require('./controllers/stockController');
const loginUserController = require('./controllers/loginUserController');
const showUserController = require('./controllers/showUserController')
const employeeinformationAdmin = require('./controllers/employeeInfoController');
const editinformationController = require('./controllers/editinformationController')
const editinformationUserController = require('./controllers/editinformationUserController')

const reportController = require('./controllers/reportController')
const contactController = require('./controllers/contactController')
const serviceUserController = require('./controllers/serviceUserController')
const contactUserController = require('./controllers/contactUserController')
const chatController = require('./controllers/chatController')
const payController = require('./controllers/payController')

const employeeTableController = require('./controllers/employeeTableController');
const HomeAdminController = require('./controllers/HomeAdminController');
const QueuebookingAdminController = require('./controllers/queuebookingAdminController');
const BookingUserController = require('./controllers/booking-userController');

//middleware
const authMiddleware = require('./Middleware/authMiddleware');
const rediractifAuth = require('./Middleware/rediractifAuth');
const adminMiddleware = require('./Middleware/adminMiddleware')

mongoose.connect('mongodb+srv://admin:12345@cluster0.te5pmag.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(flash())
app.use(expressSession({
    secret: 'node key',
    resave: false,
    saveUninitialized: false,
}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

app.get('/login-user',rediractifAuth,async (req,res) => {
    try {
        const { id } = req.params;
        const home = await Home.findOne({ id });
            if (!home) {
                req.flash('error', 'ไม่พบข้อมูล');
                return res.redirect('/login-user');
            }
                res.render('login-user', {
                home: home,
                error: req.flash('error')
             });
    } catch (error) {
    console.error(error);
    req.flash('error', 'เกิดข้อผิดพลาดในการดึงข้อมูล');
    res.redirect('/login-user');
}
})

app.get('/login-admin',rediractifAuth,async (req,res) => {
    try {
        const { id } = req.params;
        const home = await Home.findOne({ id });
            if (!home) {
                req.flash('error', 'ไม่พบข้อมูล');
                return res.redirect('/login-admin');
            }
                res.render('login-admin', {
                home: home,
                error: req.flash('error')
             });
    } catch (error) {
    console.error(error);
    req.flash('error', 'เกิดข้อผิดพลาดในการดึงข้อมูล');
    res.redirect('/login-admin');
}
})

app.get('/register',rediractifAuth,async (req,res) => {
    try {
        const { id } = req.params;
        const home = await Home.findOne({ id });
            if (!home) {
                req.flash('error', 'ไม่พบข้อมูล');
                return res.redirect('/register');
            }
                res.render('register', {
                home: home,
                error: req.flash('error'),
                formData: req.session.formData || {} 
             });
    } catch (error) {
    console.error(error);
    req.flash('error', 'เกิดข้อผิดพลาดในการดึงข้อมูล');
    res.redirect('/register');
}
});

app.get('/logout',(req,res) => {
    req.session.destroy (() => {
        res.redirect('/')
    })
})

app.get('/no-access',(req,res) => {
        res.render('no-access')
})

//add image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() +  "_" + file.originalname)
    }
});

//user
app.get('/',indexController.showDatas);
app.get('/home-user',authMiddleware,homeUserController.showDatass);
app.get('/information-user',authMiddleware,editinformationUserController.showEdits);
app.get('/booking-user',BookingUserController.showBookingUser);

app.get('/service-user',serviceUserController.showServiceUser);
app.get('/contact-user',contactUserController.showContacts);

app.get('/editInformation-user',authMiddleware,showUserController.showEditUser);
const upload7 = multer({ storage: storage }).single('slip');
app.get('/editInformation-user/:id',editinformationUserController.editUser);
app.put('/editInformation-user/:id',editinformationUserController.editPutUser);

app.get('/information-user/:id',editinformationUserController.editQueuebooking);
app.put('/information-user/:id',upload7,editinformationUserController.editPutQueuebooking);

//admin
app.get('/chatbot-admin',authMiddleware,chatController.showChat)
app.get('/home-admin',adminMiddleware,authMiddleware,HomeAdminController.showData);
app.get('/home-admin/:id',HomeAdminController.editData);

app.get('/queuebooking-admin',authMiddleware,QueuebookingAdminController.showQueuebooking);
app.get('/edit-queuebooking/:id',authMiddleware,QueuebookingAdminController.editQueuebooking);

app.get('/pay-admin',payController.showPay);
app.get('/pay-admin/:id',payController.editQueuebooking);

app.get('/employeetable-admin',authMiddleware,employeeTableController.showInfoEmpTable);

app.get('/employeeEdit-admin',authMiddleware,showUserController.showEmpEdit);
app.get('/editInformation-admin',authMiddleware,showUserController.showEdit);
app.get('/editInformation-admin/:id',editinformationController.editAdmin);

app.get('/stock-admin',authMiddleware,stockController.showStock);
app.get('/editStock-admin/:id',stockController.editStock);

app.get('/service-admin',adminMiddleware,authMiddleware,serviceController.showService);
app.get('/editService-admin/:id',serviceController.editService);

app.get('/report-admin',authMiddleware,reportController.showReport)

app.get('/homeContact-admin',authMiddleware,contactController.showContact)
app.get('/homeContact-admin/:id',contactController.editContact);

app.get('/employeeinformation-admin',adminMiddleware,authMiddleware,employeeinformationAdmin.showInfoEmployee);
app.get('/view-employeeinfo-admin/:id',employeeinformationAdmin.showInfoEmpOne);

app.post('/homeContact-admin',contactController.addContact)

app.post('/user/login',rediractifAuth,loginUserController.loginUser);
app.post('/admin/login',rediractifAuth,loginUserController.loginAdmin);

app.post('/home-admin',HomeAdminController.addData);

app.post('/register',rediractifAuth,loginUserController.addUser);
app.post('/stock-admin',stockController.addStock);
app.post('/service-admin',serviceController.addService);
app.post('/booking-user',BookingUserController.addBookingUser);
app.post('/queuebooking-admin',upload7,QueuebookingAdminController.addQueuebooking);

app.put('/pay-admin/:id',payController.editPutQueuebooking);
app.put('/edit-queuebooking/:id',QueuebookingAdminController.editPutQueuebooking);
app.put('/editService-admin/:id',serviceController.editPutService);
app.put('/editStock-admin/:id',stockController.editPutStock);
app.put('/editInformation-admin/:id',editinformationController.editPutAdmin);
app.put('/view-employeeinfo-admin/:id',employeeinformationAdmin.showInfoEmpOne);
app.put('/home-admin/:id',HomeAdminController.editPutData);
app.put('/homeContact-admin/:id',contactController.editPutContact);

app.delete('/editService-admin/:id',serviceController.deleteService);
app.delete('/view-employeeinfo-admin/:id',employeeinformationAdmin.deleteInfoEmpOne);
app.delete('/editStock-admin/:id',stockController.deleteStock);

const upload1 = multer({ storage: storage }).single('image1');
app.get('/upload-image1/:id',HomeAdminController.editData);
app.put('/upload-image1/:id',upload1,HomeAdminController.editPutData);
app.post('/upload-image1',upload1,(req,res) => {
    const upload1images = new Upload1image ({
        image1 : req.file.filename,
    })
    upload1images.save();
    console.log("Save image1 successfully!")
    res.redirect('/home-admin');
});

const upload2 = multer({ storage: storage }).single('image2');
app.get('/upload-image2/:id',HomeAdminController.editData);
app.put('/upload-image2/:id',upload2,HomeAdminController.editPutData);
app.post('/upload-image2',upload2,(req,res) => {
    const upload2images = new Upload2image ({
        image2 : req.file.filename,
    })
    upload2images.save();
    console.log("Save image2 successfully!")
    res.redirect('/home-admin');
});

const upload3 = multer({ storage: storage }).single('image3');
app.get('/upload-image3/:id',HomeAdminController.editData);
app.put('/upload-image3/:id',upload3,HomeAdminController.editPutData);
app.post('/upload-image3',upload3,(req,res) => {
    const upload3images = new Upload3image ({
        image3 : req.file.filename,
    })
    upload3images.save();
    console.log("Save image3 successfully!")
    res.redirect('/home-admin');
});

const upload4 = multer({ storage: storage }).single('image4');
app.get('/upload-image4/:id',HomeAdminController.editData);
app.put('/upload-image4/:id',upload4,HomeAdminController.editPutData);
app.post('/upload-image4',upload4,(req,res) => {
    const upload4images = new Upload4image ({
        image4 : req.file.filename,
    })
    upload4images.save();
    console.log("Save image4 successfully!")
    res.redirect('/home-admin');
});

const upload5 = multer({ storage: storage }).single('image5');
app.get('/upload-image5/:id',HomeAdminController.editData);
app.put('/upload-image5/:id',upload5,HomeAdminController.editPutData);
app.post('/upload-image5',upload5,(req,res) => {
    const upload5images = new Upload5image ({
        image5 : req.file.filename,
    })
    upload5images.save();
    console.log("Save image5 successfully!")
    res.redirect('/home-admin');
});

const upload6 = multer({ storage: storage }).single('qrcode');
app.get('/upload-qr/:id',payController.editPay);
app.put('/upload-qr/:id',upload6,payController.editPutPay);
app.post('/upload-qr',upload6,(req,res) => {
    const pays = new Pay ({
        qrcode : req.file.filename,
    })
    pays.save();
    console.log("Save qr code successfully!")
    res.redirect('/pay-admin');
});

app.listen(4000, () => {
    console.log("App listening on port 4000")
})
