const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ContactSchema = new Schema({
    address: {
        type: String,
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    phoneaddress: {
        type: String,
    },
    
})

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;