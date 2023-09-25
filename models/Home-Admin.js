const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema ({
    inputLogo : {
        type : String,
        required: [true, 'Please provide inputLogo '],
    },
    img_booking : {
        type : String,
        required: [true, 'Please provide img_booking'],
    },
    promotion : {
        type : String,
        required: [true, 'Please provide promotion'],
    },
    img_services1 : {
        type : String,
        required: [true, 'Please provide img_services1'],
    },
    description1 : {
        type : String,
        required: [true, 'Please provide description1'],
    },
    img_services2 : {
        type : String,
        required: [true, 'Please provide img_services2'],
    },
    description2 : {
        type : String,
        required: [true, 'Please provide description2'],
    },
    img_services3 : {
        type : String,
        required: [true, 'Please provide img_services3'],
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