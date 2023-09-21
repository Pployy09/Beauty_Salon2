const User = require('../models/User');
const Service = require('../models/Service');
const Home = require('../models/Home-Admin');

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
    

}
