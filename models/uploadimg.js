const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//add image1 
const Upload1Schema = new Schema ({
    image1 : {
        type : String,
        required: [true, 'Please provide img'],
        
    },
});
const Upload1image = mongoose.model('Upload1image',Upload1Schema);
module.exports = Upload1image;
