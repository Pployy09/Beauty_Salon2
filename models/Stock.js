const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StockSchema = new Schema({
    code: {
        type: String,
    },
    name_product: {
        type: String,
    },
    price_product: {
        type: String,
    },
    unit_product: {
        type: String,
    },
    brand_product: {
        type: String,
    },
    detail_product: {
        type: String,
    }
})

const Stock = mongoose.model('Stock', StockSchema);
module.exports = Stock;