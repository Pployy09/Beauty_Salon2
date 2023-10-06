const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');
const QueueBookingUser = require('../models/Queuebooking-User');

exports.showBookingUser = async(req, res) => {
    const HomeData = await Home.find();
    const UserData = await User.findById(req.session.userId);
    await Service.find().then(function(ServiceData){
        res.render("booking-user",{
            UserData:UserData,
            ServiceDataList : ServiceData,
            HomeData : HomeData,
          
            
        });
       
    });
};

exports.addBookingUser = async (req,res) =>{ 
    try{
        const user = await User.findById(req.session.userId);
        if(!user){
            return res.status(404).json({error:'User not found'});
        }
        
        
        const bookingCustomer =  new QueueBookingUser({
        
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
