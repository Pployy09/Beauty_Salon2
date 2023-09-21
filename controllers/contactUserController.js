const Contact = require('../models/Contact')

//show Contact
exports.showContacts = async (req,res) =>{
    const {id} = req.params;
    const contact = await Contact.findById(id)
    res.render('contact-user',{contact})
};