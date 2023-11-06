const User = require('../models/User')
const Home = require('../models/Home-Admin');
const Pay = require('../models/Pay')
const QueueBookingCustomer = require('../models/Queuebooking-Customer');
const fs = require('fs')

//show data
exports.showPay = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const home = await Home.findOne({id})
    const qr = await Pay.findOne({id})
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
         res.render("pay-admin",{  
         UserData,home,qr,QueueBookingCustomerData
        });
};

//edit data
exports.editPay = async (req,res) =>{
    try{
        const {id} = req.params;
        const qr = await Pay.findById({id})
        res.render('pay-admin',{qr})
    }catch(error){
        console.log(error);
    }
};

//update data 
exports.editPutPay = async (req,res) =>{

    await Pay.findByIdAndUpdate(req.params.id,{
        qrcode:req.body.qrcode,});
    res.redirect('/pay-admin');
}



//edit booking
exports.editQueuebooking = async (req, res) =>{
    try{
        const UserData = await User.findById(req.session.userId);
        const HomeData = await Home.find();
        const ServiceData = await Service.find();
        const QueueBookingCustomerData = await QueueBookingCustomer.findOne({ _id : req.params.id});
        await  User.find({ role : "emp"}).then(function(emps){
            res.render('pay-admin',{
                UserData : UserData,
                QueueBookingCustomerData : QueueBookingCustomerData,
                HomeData : HomeData,
                ServiceDataList : ServiceData,
                empList : emps,
                
            })
        });
       
    }catch(error){
        console.log("Error")
    }
}


//update booking
exports.editPutQueuebooking = async (req,res) =>{
    try{
        await QueueBookingCustomer.findByIdAndUpdate(req.params.id,{
            customerUsername:req.body.customerUsername,
            customerFirstname : req.body.firstname,
            customerLastname:req.body.lastname,
            phonenum : req.body.phonenum,
            booking_date_user : req.body.booking_date_user,
            booking_service_user :  req.body.booking_service_user,
            booking_time_user :  req.body.booking_time_user,
            employeeName : req.body.employeeName,
            amount : req.body.amount,
            status : req.body.status
        })
        res.redirect('/pay-admin');

    }catch(error){
        console.log(error);
    }
};
