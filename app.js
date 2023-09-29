const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')
const methodOverride  = require('method-override');

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


mongoose.connect('mongodb+srv://admin:12345@cluster0.te5pmag.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true})

app.set('view engine','ejs')

app.use(express.static('public'))
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

app.put('/homeContact-admin/:id',contactController.editPutContact);
app.put('/home-admin/:id',HomeAdminController.editPutData);

app.delete('/editService-admin/:id',serviceController.deleteService);
app.delete('/view-employeeinfo-admin/:id',employeeinformationAdmin.deleteInfoEmpOne);
app.delete('/editStock-admin/:id',stockController.deleteStock);


app.listen(4000, () => {
    console.log("App listening on port 4000")
})
