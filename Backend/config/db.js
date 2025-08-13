const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
dotenv.config()

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env

const connnectDB = async () => {

    mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.xxyslsu.mongodb.net/`)
        .then(() => {
            console.log("MongoDB is connected successfully".bgCyan)
        }).catch((error) => {
            console.error("MongoDB connection failed:", error)
        })
}
module.exports = connnectDB