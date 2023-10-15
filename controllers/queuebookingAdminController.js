const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');
const QueueBookingCustomer = require('../models/Queuebooking-Customer');

//show booking
exports.showQueuebooking = async(req, res) => {
    const UserData = await User.findById(req.session.userId);
    const ServiceData = await Service.find();
    const HomeData = await Home.find();
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await  User.find({ role : "emp"}).then(function(emps){
        res.render("queuebooking-admin",{
            empList : emps,
            UserData:UserData,
            ServiceDataList : ServiceData,
            HomeData : HomeData,
            QueueBookingCustomerData:QueueBookingCustomerData,
        });
    });
    
}

// add booking
exports.addQueuebooking = async (req, res) =>{
    try{
        const bookingCustomer =  new QueueBookingCustomer({
            customerName: req.body.customerName,
            phonenum : req.body.phonenum,
            booking_date_user : req.body.booking_date_user,
            booking_service_user :  req.body.booking_service_user,
            booking_time_user :  req.body.booking_time_user,
            employeeName : req.body.employeeName,
            });
        bookingCustomer.save();
        console.log("Create service successfully!")
        res.redirect('/queuebooking-admin');
    }catch(error){
        console.log("Error")
    }
}

//edit booking
exports.editQueuebooking = async (req, res) =>{
    try{
        const UserData = await User.findById(req.session.userId);
        const HomeData = await Home.find();
        const ServiceData = await Service.find();
        const QueueBookingCustomerData = await QueueBookingCustomer.findOne({ _id : req.params.id});
        await  User.find({ role : "emp"}).then(function(emps){
            res.render('edit-queuebooking',{
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
        })
        res.redirect('/queuebooking-admin');

    }catch(error){
        console.log(error);
    }
};