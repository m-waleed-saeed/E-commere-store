const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cron = require('node-cron')
const connectDB = require('./config/db')
const sendWelcomeEmail = require('./EmailServices/sendWelcomeEmail')
const sendPendingOrderEmail = require('./EmailServices/sendPendingOrderEmail')
const sendDeliveredOrderEmail = require('./EmailServices/sendDeliveredOrderEmail')
const sendPromotionEmail = require('./EmailServices/sendPromotionEmail')
dotenv.config()

const app = express()
const { PORT } = process.env

// Schedule Services Email
const services = () => {
    cron.schedule('* * * * * *', () => {
        sendWelcomeEmail();
        sendPendingOrderEmail();
        sendDeliveredOrderEmail();
    })
}

// Sending Promotion Email
const promotion = () => {
    cron.schedule('30 5 * * 5', () => {
        sendPromotionEmail();
    })
}

services();
promotion();

connectDB()

app.listen(PORT, () => {
    console.log(`Background Services is running on PORT: ${PORT}`.bgBlue)
})