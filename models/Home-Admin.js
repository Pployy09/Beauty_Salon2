const { Timestamp } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema ({
    inputLogo : {
        type : String,
    },
    
    description1 : {
        type : String,
    },
    
    description2 : {
        type : String,
    },
    
    description3 : {
        type : String,
    },
    time_open : {
        type : String,
    },
    time_close : {
        type : String,
    },
    holiday: {
        type: String,
    },
    
});

const Home = mongoose.model('Home',HomeSchema);
module.exports = Home;