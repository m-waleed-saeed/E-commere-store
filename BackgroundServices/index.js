const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cron = require('node-cron')
const connectDB = require('./config/db')
dotenv.config()

const app = express()
const { PORT } = process.env

// Schedule Services
const services = () => {
    cron.schedule('* * * * * *', () => {
        // console.log('running a task every second')
    })
}
services();

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`.bgBlue)
})