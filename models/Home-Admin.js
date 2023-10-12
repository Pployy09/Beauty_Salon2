const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema ({
    inputLogo : {
        type : String,
        required: [true, 'Please provide inputLogo '],
    },
    
    description1 : {
        type : String,
        required: [true, 'Please provide description1'],
    },
    
    description2 : {
        type : String,
        required: [true, 'Please provide description2'],
    },
    
    description3 : {
        type : String,
        required: [true, 'Please provide description3'],
    },
    time_open : {
        type : String,
        required: [true, 'Please provide time open'],
    },
    time_close : {
        type : String,
        required: [true, 'Please provide time close'],
    },
    
});

const Home = mongoose.model('Home',HomeSchema);
module.exports = Home;