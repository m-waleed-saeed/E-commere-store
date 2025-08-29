const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    whatinbox: { type: String },
    image: { type: String, required: true },
    video: { type: String },
    wholesalePrice: { type: Number },
    wholesaleMinimumQuantity: { type: Number },
    categories: { type: Array },
    concern: { type: Array },
    brand: { type: String },
    skinType: { type: Array },
    originalPrice: { type: Number },
    discountedPrice: { type: Number },
    inStock: { type: Boolean, default: true },
    ratings: [
        {
            star: { type: String },
            name: { type: String },
            comment: { type: String },
            postedBy: { type: String },
        }
    ],
}, { timestamps: true })

productSchema.index({ '$**': 'text' })

const Product = mongoose.model('Product', productSchema)

module.exports = Product