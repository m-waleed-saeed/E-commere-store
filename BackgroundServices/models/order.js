const mongoose = require('mongoose')

const Schema =mongoose.Schema

const orderSchema = new Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    products: { type: Array, required: true },
    total: { type:Number, required: true },
    address: { type:String, required: true },
    phone: { type:String, required: true },
    email: { type: String, },
    status: { type: Number, default: 0 },
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)

module.exports = Order