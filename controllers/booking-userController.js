const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');
const QueueBookingCustomer = require('../models/Queuebooking-Customer');

exports.showBookingUser = async(req, res) => {
    const {id} = req.params;
    const home = await Home.findOne({id})
    const HomeData = await Home.find()
    const UserData = await User.findById(req.session.userId);
    const EmpData = await User.find({ role : "emp"});
    const QueueBookingCustomerData = await QueueBookingCustomer.find();
    await Service.find().then(function(ServiceData){
        res.render("booking-user",{
            UserData:UserData,
            empList:EmpData,
            ServiceDataList : ServiceData,
            QueueBookingCustomerData : QueueBookingCustomerData,
            HomeData : HomeData,
            home
          
        });
       
    });
};

exports.addBookingUser = async (req,res) =>{ 
    try{
        const user = await User.findById(req.session.userId);
        if(!user){
            res.status(404);
            res.send("กรุณาเข้าสู่ระบบเพื่อจองคิว");
          
        }
        const bookingCustomer =  new QueueBookingCustomer({
        customerUsername: user.username,
        customerFirstname : user.firstname,
        customerLastname:user.lastname,
        phonenumOfUsername : user.phonenum,
        booking_date_user : req.body.booking_date_user,
        booking_service_user :  req.body.booking_service_user,
        booking_time_user :  req.body.booking_time_user,
        }); 
        
       
       bookingCustomer.save();
       console.log("Create service successfully!")
       res.redirect('/booking-user');
    } catch(error){
        console.log("Error")
    }
};
