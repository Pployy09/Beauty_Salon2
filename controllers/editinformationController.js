const User = require('../models/User')

//edit information
exports.editAdmin = async (req,res) =>{
    try{
        const {id} = req.params;
        const UserData = await User.findById(id)
        res.render('editInformation-admin',{UserData})
    }catch(error){
        console.log(error);
    }
};

//update information 
exports.editPutAdmin = async (req,res) =>{
    const {id} = req.params;
    await User.findByIdAndUpdate(id,req.body,{runValidators:true});
    res.redirect('/employeeEdit-admin');
}