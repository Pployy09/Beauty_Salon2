const Service = require('../models/Service');
const User = require('../models/User')
const Home = require('../models/Home-Admin')

exports.showServiceUser = async (req,res) =>{
    const {id} = req.params;
    const home = await Home.findOne({id})
    const UserData = await User.findById(req.session.userId)
    await Service.find().then(function(services){
         res.render("service-user",{ 
            serviceList:services,
            UserData : UserData,
            home
        });
     })
};