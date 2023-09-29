const Home = require('../models/Home-Admin');
const User = require('../models/User')

//show data
exports.showData = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const home = await Home.findOne({id})
         res.render("home-admin",{  
            home,UserData,
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
            time_open : req.body.time_open,
            time_close : req.body.time_close,
            
        });

        homes.save();
        console.log("Save data successfully!")
       res.redirect('/home-admin');
    }catch(error){
        console.log(error)
    }
};

//edit data
exports.editData = async (req,res) =>{
    try{
        const {id} = req.params;
        const HomeAdmin = await Home.findById(id)
        res.render('home-admin',{HomeAdmin})
    }catch(error){
        console.log(error);
    }
};

//update data 
exports.editPutData = async (req,res) =>{
    const {id} = req.params;
    await Home.findByIdAndUpdate(id,req.body,{runValidators:true});
    res.redirect('/home-admin');
}