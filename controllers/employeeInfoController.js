const User = require('../models/User')

//show info emp all
exports.showInfoEmployee = async (req,res) =>{
    const UserData = await User.findById(req.session.userId);
    await  User.find({ role : "emp"}).then(function(emps){
        res.render("employeeinformation-admin",{
            empList : emps,
            UserData:UserData,
            
        });
    });
    
   
}

//show info emp รายคน
exports.showInfoEmpOne = async (req,res) =>{
    try{
         const UserData = await User.findById(req.session.userId);
         const UserFindOne = await User.findOne({ _id : req.params.id});
         res.render('view-employeeinfo-admin',{ 
            UserFindOne : UserFindOne,
            UserData:UserData,
         });
    }catch(error){
        console.log(error);
    }
  
}

//delete info emp 
exports.deleteInfoEmpOne = async (req,res) =>{
    try{
        await User.deleteOne({ _id:req.params.id});
        res.redirect('/employeeinformation-admin');
    }catch(error){
        console.log(error);
    }
  
}
