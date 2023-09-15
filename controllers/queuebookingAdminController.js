const User = require('../models/User');
const Service = require('../models/Service');

exports.showQueuebook = async(req, res) => {
    const UserData = await User.findById(req.session.userId);
    const ServiceData = await Service.find();
    await  User.find({ role : "emp"}).then(function(emps){
        res.render("queuebooking-admin",{
            empList : emps,
            UserData:UserData,
            ServiceDataList : ServiceData
            
        });
    });
    
}
