const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    address: {
        type: String,
    },
    address2: {
        type: String,
    },
    phoneaddress: {
        type: String,
    },
    
})

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;