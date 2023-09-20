const Service = require('../models/Service');
const User = require('../models/User')

exports.showServiceUser = async (req,res) =>{
    const UserData = await User.findById(req.session.userId)
    await Service.find().then(function(services){
         res.render("service-user",{ 
            serviceList:services,
            UserData : UserData,
        });
     })
};