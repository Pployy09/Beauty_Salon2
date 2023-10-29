const User = require('../models/User')
const Home = require('../models/Home-Admin');
const Upload1image = require('../models/uploadimg')
const Upload2image = require('../models/uploadimg2')
const Upload3image = require('../models/uploadimg3')
const Upload4image = require('../models/uploadimg4')
const Upload5image = require('../models/uploadimg5')
const fs = require('fs')

//show data
exports.showData = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const home = await Home.findOne({id})
    const img1 = await Upload1image.findOne({id})
    const img2 = await Upload2image.findOne({id})
    const img3 = await Upload3image.findOne({id})
    const img4 = await Upload4image.findOne({id})
    const img5 = await Upload5image.findOne({id})
         res.render("home-admin",{  
         UserData,home,img1,img2,img3,img4,img5
        });
};

//add data  
exports.addData = async (req,res) =>{
    try{
        const homes = await new Home({
            inputLogo : req.body.inputLogo,
            description1 : req.body.description1,
            description2 : req.body.description2,
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
        const home = await Home.findById({id})
        const img1 = await Upload1image.findById({id})
        const img2 = await Upload2image.findById({id})
        const img3 = await Upload3image.findById({id})
        const img4 = await Upload4image.findById({id})
        const img5 = await Upload5image.findById({id})
        res.render('home-admin',{home,img1,img2,img3,img4,img5})
    }catch(error){
        console.log(error);
    }
};

//update data 
exports.editPutData = async (req,res) =>{
    let id = req.params.id;
    let new_img = " "; 
    if (req.file) {
        new_img = req.file.filename;
        try {
            // ลบไฟล์รูปเดิม
            fs.unlinkSync('../uploads/' + req.body.image1);
            fs.unlinkSync('../uploads/' + req.body.image2);
            fs.unlinkSync('../uploads/' + req.body.image3);
            fs.unlinkSync('../uploads/' + req.body.image4);
            fs.unlinkSync('../uploads/' + req.body.image5);
        } catch (err) {
            console.log(err);
        }
    } else {
        new_img = req.body.image1;
        new_img = req.body.image2;
        new_img = req.body.image3;
        new_img = req.body.image4;
        new_img = req.body.image5;
    }
    await Home.findByIdAndUpdate(id,req.body,{runValidators:true});
    await Upload1image.findByIdAndUpdate(id,{ image1: new_img },{runValidators:true});
    await Upload2image.findByIdAndUpdate(id,{ image2: new_img },{runValidators:true});
    await Upload3image.findByIdAndUpdate(id,{ image3: new_img },{runValidators:true});
    await Upload4image.findByIdAndUpdate(id,{ image4: new_img },{runValidators:true});
    await Upload5image.findByIdAndUpdate(id,{ image5: new_img },{runValidators:true});
    res.redirect('/home-admin');
}