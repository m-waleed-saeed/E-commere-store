const mongoose = require('mongoose')

const bannerSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true })

const Banner = mongoose.model('Banner', bannerSchema)

module.exports = Banner