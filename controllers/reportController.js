const Stock = require('../models/Stock');
const Home = require('../models/Home-Admin');
const User = require('../models/User')
const ContactUser = require('../models/ContactUser')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');

//show Report
exports.showReport = async (req,res) =>{
    const {id} = req.params;
    const home = await Home.findOne({id})
    const UserData = await User.findById(req.session.userId)
    const contact = await ContactUser.find()
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await   Stock.find().then(function(stocks){
            res.render("report-admin",{ 
                stockList:stocks,
                UserData : UserData,
                home,
                QueueBookingCustomerData:QueueBookingCustomerData,
                contact,  });
     })
     
};

//show service
exports.showReservice = async (req,res) =>{
    const {id} = req.params;
    const home = await Home.findOne({id})
    const UserData = await User.findById(req.session.userId)
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await   Stock.find().then(function(stocks){
            res.render("reportService",{ 
                stockList:stocks,
                UserData : UserData,
                home,
                QueueBookingCustomerData:QueueBookingCustomerData 
            });
     })
     
};

//show product
exports.showReproduct = async (req,res) =>{
    const {id} = req.params;
    const home = await Home.findOne({id})
    const UserData = await User.findById(req.session.userId)
    await   Stock.find().then(function(stocks){
            res.render("reportProduct",{ 
                stockList:stocks,
                UserData : UserData,
                home });
     })
     
};