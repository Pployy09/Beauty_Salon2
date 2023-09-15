const User = require('../models/User');
const Service = require('../models/Service');

//show info emp all
exports.showInfoEmpTable = async (req,res) =>{

    
    const UserData = await User.findById(req.session.userId);
    const ServiceData = await Service.find();
    await  User.find({ role : "emp"}).then(function(emps){
        res.render("employeetable-admin",{
            empList : emps,
            UserData:UserData,
            ServiceDataList : ServiceData
            
        });
    });
    
   
}