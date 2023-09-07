const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema ({
    service_name : {
       type : String,
       required: [true, 'Please provide service name'],
    },
    service_price : {
        type : Number,
        required: [true, 'Please provide service price'],
    },
    service_time : {
        type : String,
        required: [true, 'Please provide service time'],
    },

});

const Service = mongoose.model('Service',ServiceSchema);
module.exports = Service;



