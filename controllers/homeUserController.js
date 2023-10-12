const User = require('../models/User')
const Home = require('../models/Home-Admin');
const Upload1image = require('../models/uploadimg')
const Upload2image = require('../models/uploadimg2')
const Upload3image = require('../models/uploadimg3')
const Upload4image = require('../models/uploadimg4')
const Upload5image = require('../models/uploadimg5')

//show data
exports.showDatass = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const home = await Home.findOne({id})
    const img1 = await Upload1image.findOne({id})
    const img2 = await Upload2image.findOne({id})
    const img3 = await Upload3image.findOne({id})
    const img4 = await Upload4image.findOne({id})
    const img5 = await Upload5image.findOne({id})
         res.render("home-user",{  
         UserData,home,img1,img2,img3,img4,img5
        });
};