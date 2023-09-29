const Contact = require('../models/Contact')
const User = require('../models/User')

//show Contact
exports.showContact = async (req,res) =>{
    const {id} = req.params;
    const UserData = await User.findById(req.session.userId)
    const contact = await Contact.findOne({id})
    res.render('homeContact-admin',{contact,UserData})
};

//add contact 
exports.addContact = async (req,res) =>{ 
    try{
       const contacts = await new Contact({
        address      : req.body.address,
        lat          : req.body.lat,
        lng          : req.body.lng,
        phoneaddress : req.body.phoneaddress,
        }); 

       contacts.save();
       console.log("Create contact successfully!")
       res.redirect('/homeContact-admin');
    } catch(error){
        console.log("Error")
    }
};

//edit contact 
exports.editContact = async (req,res) =>{
    try{
        const {id} = req.params;
        const Contact = await Contact.findById(id)
        res.render('homeContact-admin',{Contact})
    }catch(error){
        console.log(error);
    }
};

//update contact 
exports.editPutContact = async (req,res) =>{
    const {id} = req.params;
    await Contact.findByIdAndUpdate(id,req.body,{runValidators:true});
    res.redirect('/homeContact-admin');
}