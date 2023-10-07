const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//add image5
const Upload5Schema = new Schema ({
    image5 : {
        type : String,
        required: [true, 'Please provide img'],
    },
});
const Upload5image = mongoose.model('Upload5image',Upload5Schema);
module.exports = Upload5image;

