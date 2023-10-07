const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//add image2 
const Upload2Schema = new Schema ({
    image2 : {
        type : String,
        required: [true, 'Please provide img'],
    },
});
const Upload2image = mongoose.model('Upload2image',Upload2Schema);
module.exports = Upload2image;

