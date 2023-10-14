const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueueBookingCustomerSchema = new Schema({
    customerUsername :{
        type: mongoose.Schema.Types.String, 
        ref: 'users' ,
    },
    customerName :{
        type: String,
       
    },
    phonenum : {
        type: String,
        
    },
    booking_date_user : {
        type : String,
        required: [true, 'Please provide booking date'],
    },
    booking_service_user :{
        type : String,
        required: [true, 'Please provide booking service'],
    },
    booking_time_user : {
        type : Array,
        dataArray: String,
        required: [true, 'Please provide booking time'],
    },
    employeeName : {
        type: String,
        
    }
});

const QueueBookingCustomer = mongoose.model('QueueBookingCustomer',QueueBookingCustomerSchema);
module.exports = QueueBookingCustomer;