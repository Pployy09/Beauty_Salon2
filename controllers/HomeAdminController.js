const Home = require('../models/Home-Admin');
const User = require('../models/User')

//show data
exports.showData = async (req,res) =>{
    const UserData = await User.findById(req.session.userId)
         res.render("home-admin",{  
            UserData : UserData,
        });
    
};



//add data  
exports.addData = async (req,res) =>{
    try{
        const homes = await new Home({
            inputLogo : req.body.inputLogo,
            img_booking : req.body.img_booking,
            promotion : req.body.promotion,
            img_services1 : req.body.img_services1,
            description1 : req.body.description1,
            img_services2 : req.body.img_services2,
            description2 : req.body.description2,
            img_services3 : req.body.img_services3,
            description3 : req.body.description3,
            description4 : req.body.description4,
            description5 : req.body.description5,
            description6 : req.body.description6,
        });

        homes.save();
        console.log("Save data successfully!")
       res.redirect('/home-admin');
    }catch(error){
        console.log(error)
    }
};