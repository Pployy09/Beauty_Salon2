const Contact = require('../models/Contact');
const User = require('../models/User')
const Home = require('../models/Home-Admin');

//show Contact
exports.showContacts = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const home = await Home.findOne({id})
    const contact = await Contact.findOne({id})
    res.render('contact-user',{contact,UserData,home})
};

