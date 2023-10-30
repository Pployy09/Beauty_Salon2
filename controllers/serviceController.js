const Service = require('../models/Service');
const User = require('../models/User')
const fs = require('fs')

//show service
exports.showService = async (req,res) =>{
    const UserData = await User.findById(req.session.userId)
    await Service.find().then(function(services){
         res.render("service-admin",{ 
            serviceList:services,
            UserData : UserData,
        });
     })
};


//add service 
exports.addService = async (req,res) =>{ 
    try{
       const services = await new Service({
        service_name  : req.body.service_name,
        service_price : req.body.service_price,
        service_time  : req.body.service_time,
        imageservice  : req.file.filename,
        }); 

       services.save();
       console.log("Create service successfully!")
       res.redirect('/service-admin');
    } catch(error){
        console.log("Error")
    }
};

//edit service 
exports.editService = async (req,res) =>{
    try{
        const UserData = await User.findById(req.session.userId)
        const  service = await  Service.findOne({ _id : req.params.id});
        res.render('editService-admin',{ 
            service : service,
            UserData : UserData,
        });
    }catch(error){
        console.log(error);
    }
};

//update service 
exports.editPutService = async (req,res) =>{
    try{
        let id = req.params.id;
        let new_img = " "; 
        if (req.file) {
            new_img = req.file.filename;
            try {
                // ลบไฟล์รูปเดิม
                fs.unlinkSync('../uploads/' + req.body.imageservice);
                
            } catch (err) {
                console.log(err);
            }
        } else {
            new_img = req.body.imageservice;
        }
        await Service.findByIdAndUpdate(id,{
            service_name  : req.body.service_name,
            service_price : req.body.service_price,
            service_time  : req.body.service_time,
            imageservice  : new_img,
        })
        res.redirect('/service-admin');

    }catch(error){
        console.log(error);
    }
};

//delete service
exports.deleteService = async (req,res) =>{
    try{
        await Service.deleteOne({ _id:req.params.id});
        res.redirect('/service-admin');

    }catch(error){
        console.log(error);
    }
};







