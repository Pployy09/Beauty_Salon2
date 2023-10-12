const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//add image4 
const Upload4Schema = new Schema ({
    image4 : {
        type : String,
        required: [true, 'Please provide img'],
    },
});
const Upload4image = mongoose.model('Upload4image',Upload4Schema);
module.exports = Upload4image;

