const User = require('../models/User');
const Service = require('../models/Service');

exports.showBookingUser = async(req, res) => {
    const UserData = await User.findById(req.session.userId);
    await Service.find().then(function(ServiceData){
        res.render("booking-user",{
            UserData:UserData,
            ServiceDataList : ServiceData
            
        });
    });

}
