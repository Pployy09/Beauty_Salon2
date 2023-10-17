const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaySchema = new Schema({
    qrcode : {
        type: String,
    },
    
});

const Pay = mongoose.model('Pay',PaySchema);
module.exports = Pay;