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
app.get('/booking-user',showUserController.showBook);
//admin
app.get('/home-admin',showUserController.showHomeAdmin);
app.get('/homeContact-admin',showUserController.showHomeContact);

app.get('/queuebooking-admin',showUserController.showQueuebook);
app.get('/pay-admin',showUserController.showPay);
app.get('/employeetable-admin',showUserController.showEmpTable);

app.get('/employeeEdit-admin',showUserController.showEmpEdit);

app.get('/stock-admin',stockController.showStock);
app.get('/editStock-admin/:id',stockController.editStock);

app.get('/service-admin',serviceController.showService);
app.get('/editService-admin/:id',serviceController.editService);

app.get('/employeeinformation-admin',employeeinformationAdmin.showInfoEmployee);

app.post('/user/login',loginUserController.loginUser);
app.post('/admin/login',loginUserController.loginAdmin);

app.post('/user/register',loginUserController.addUser);
app.post('/stock-admin',stockController.addStock);
app.post('/service-admin',serviceController.addService);

app.put('/editService-admin/:id',serviceController.editPutService);
app.put('/editStock-admin/:id',stockController.editPutStock);

app.delete('/editService-admin/:id',serviceController.deleteService);
app.delete('/editStock-admin/:id',stockController.deleteStock);


app.listen(4000, () => {
    console.log("App listening on port 4000")
})
