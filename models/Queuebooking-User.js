const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QueueBookingUserSchema = new Schema({
    CustomerUsername :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'username' ,
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
});

const QueueBookingUser = mongoose.model('QueueBookingUser',QueueBookingUserSchema);
module.exports = QueueBookingUser;