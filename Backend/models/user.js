const mongoose = require('mongoose')

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    role: { type: String, default: 'user' },
    status: { type: Number, default: 0 },
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

module.exports = User