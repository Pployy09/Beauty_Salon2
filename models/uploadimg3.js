const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//add image3
const Upload3Schema = new Schema ({
    image3 : {
        type : String,
        required: [true, 'Please provide img'],
    },
});
const Upload3image = mongoose.model('Upload3image',Upload3Schema);
module.exports = Upload3image;

