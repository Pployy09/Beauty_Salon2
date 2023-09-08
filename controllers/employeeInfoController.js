const User = require('../models/User')

//show info emp
exports.showInfoEmployee = async (req,res) =>{
    const UserData = await User.findById(req.session.userId)
    await  User.find({ role : "emp"}).then(function(emps){
        res.render("employeeinformation-admin",{
            empList : emps,
            UserData:UserData,
           
    }); 
    });
}
