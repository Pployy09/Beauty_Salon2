const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema ({
    inputLogo : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    img_booking : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    promotion : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    img_services1 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    description1 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    img_services2 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    description2 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    img_services3 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    description3 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    description4 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    description5 : {
        type : String,
        required: [true, 'Please provide service name'],
    },
    
});

const Home = mongoose.model('Home',HomeSchema);
module.exports = Home;