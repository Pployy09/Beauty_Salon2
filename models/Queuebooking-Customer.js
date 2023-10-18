const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueueBookingCustomerSchema = new Schema({
    customerUsername :{
        type: mongoose.Schema.Types.String, 
        ref: 'users' ,
    },
    customerFirstname :{
        type: mongoose.Schema.Types.String, 
        ref: 'users' ,
    },
    customerLastname :{
        type: mongoose.Schema.Types.String,
        ref: 'users' ,
    },
    customerName :{
        type: String,
       
    },
    phonenumOfUsername : {
        type: mongoose.Schema.Types.String, 
        ref: 'users' 
        
    },
    phonenum : {
        type: String,
        
    },
    booking_date_user : {
        type : String,
        
    },
    booking_service_user :{
        type : Array,
        dataArray : String,
        
    },
    booking_time_user : {
        type : Array,
        dataArray: String,
        
    },
    employeeName : {
        type: String,
    },
    
    emp_selection_status :{
        type: String,
    },
    price : {
        type : String
    },
    status : {
        type : Array,
        dataArray: String,
    },
    slip : {
        type : String
    }
});

const QueueBookingCustomer = mongoose.model('QueueBookingCustomer',QueueBookingCustomerSchema);
module.exports = QueueBookingCustomer;