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

//controller
const serviceController = require('./controllers/serviceController');
const stockController = require('./controllers/stockController');
const registerController = require('./controllers/registerController');
const loginUserController = require('./controllers/loginUserController');
const showUserController = require('./controllers/showUserController')
const employeeinformationAdmin = require('./controllers/employeeInfoController');
const editinformationController = require('./controllers/editinformationController')
const editinformationUserController = require('./controllers/editinformationUserController')

const reportController = require('./controllers/reportController')
const contactController = require('./controllers/contactController')
const serviceUserController = require('./controllers/serviceUserController')
const contactUserController = require('./controllers/contactUserController')

const employeeTableController = require('./controllers/employeeTableController');
const HomeAdminController = require('./controllers/HomeAdminController');
const QueuebookingAdminController = require('./controllers/QueuebookingAdminController');
const BookingUserController = require('./controllers/booking-userController');

//middleware
const authMiddleware = require('./Middleware/authMiddleware');
const rediractifAuth = require('./Middleware/rediractifAuth');

mongoose.connect('mongodb+srv://admin:12345@cluster0.te5pmag.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded())
app.use(methodOverride('_method'));
app.use(flash())
app.use(expressSession({secret:"node secret"}))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/login-user',(req,res) => {
    res.render('login-user')
})
app.get('/login-admin',(req,res) => {
    res.render('login-admin')
})

app.get('/logout',(req,res) => {
    req.session.destroy (() => {
        res.redirect('/')
    })
})


//user
app.get('/register',registerController);
app.get('/home-user',showUserController.showHome);

app.get('/information-user',showUserController.showEdits);
app.get('/booking-user',BookingUserController.showBookingUser);

app.get('/service-user',serviceUserController.showServiceUser);
app.get('/contact-user',contactUserController.showContacts);

app.get('/editInformation-user',showUserController.showEditUser);
app.get('/editInformation-user/:id',editinformationUserController.editUser);

app.put('/editInformation-user/:id',editinformationUserController.editPutUser);

//admin
app.get('/home-admin',HomeAdminController.showData);
app.get('/home-admin/:id',HomeAdminController.editData);

app.get('/queuebooking-admin',QueuebookingAdminController.showQueuebook);
app.get('/pay-admin',showUserController.showPay);
app.get('/employeetable-admin',employeeTableController.showInfoEmpTable);

app.get('/employeeEdit-admin',showUserController.showEmpEdit);
app.get('/editInformation-admin',showUserController.showEdit);
app.get('/editInformation-admin/:id',editinformationController.editAdmin);

app.get('/stock-admin',stockController.showStock);
app.get('/editStock-admin/:id',stockController.editStock);

app.get('/service-admin',serviceController.showService);
app.get('/editService-admin/:id',serviceController.editService);

app.get('/report',reportController.showStocks)

app.get('/homeContact-admin',contactController.showContact)
app.get('/homeContact-admin/:id',contactController.editContact);

app.get('/employeeinformation-admin',employeeinformationAdmin.showInfoEmployee);
app.get('/view-employeeinfo-admin/:id',employeeinformationAdmin.showInfoEmpOne);

app.post('/homeContact-admin',contactController.addContact)

app.post('/user/login',loginUserController.loginUser);
app.post('/admin/login',loginUserController.loginAdmin);

app.post('/home-admin',HomeAdminController.addData);

app.post('/user/register',loginUserController.addUser);
app.post('/stock-admin',stockController.addStock);
app.post('/service-admin',serviceController.addService);


app.put('/editService-admin/:id',serviceController.editPutService);
app.put('/editStock-admin/:id',stockController.editPutStock);
app.put('/editInformation-admin/:id',editinformationController.editPutAdmin);
app.put('/view-employeeinfo-admin/:id',employeeinformationAdmin.showInfoEmpOne);
app.put('/home-admin/:id',HomeAdminController.editPutData);
app.put('/homeContact-admin/:id',contactController.editPutContact);

app.delete('/editService-admin/:id',serviceController.deleteService);
app.delete('/view-employeeinfo-admin/:id',employeeinformationAdmin.deleteInfoEmpOne);
app.delete('/editStock-admin/:id',stockController.deleteStock);

//add image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() +  "_" + file.originalname)
    }
});

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


app.listen(4000, () => {
    console.log("App listening on port 4000")
})
