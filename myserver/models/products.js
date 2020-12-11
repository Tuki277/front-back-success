const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Products = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('products', Products)