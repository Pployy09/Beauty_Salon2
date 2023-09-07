const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
    idproduct: {
        type: String,
    },
    name_product: {
        type: String,
    },
    price_product: {
        type: String,
    }
})

const Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;