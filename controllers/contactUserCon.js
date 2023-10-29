const ContactUser = require('../models/ContactUser')

//add contact 
exports.addContactUser = async (req,res) =>{ 
    try{
       const contactusers = await new ContactUser({
        name     : req.body.name,
        lastname : req.body.lastname,
        email    : req.body.email,
        phone    : req.body.phone,
        textarea : req.body.textarea,
        }); 

       contactusers.save();
       console.log("Create contact user successfully!")
       res.redirect('/contact-user');
    } catch(error){
        console.log("Error")
    }
};
