const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/error');
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const bannerRoute = require('./routes/banner')
const userRoute = require('./routes/user')
const orderRoute = require('./routes/order')

const app = express();

// express dot json
app.use(express.json())

//cookie-parser
app.use(cookieParser())

// cors
app.use(cors())

// Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/products', productRoute)
app.use('/api/v1/banners', bannerRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/orders', orderRoute)

// Error middleware
app.use(notFound)
app.use(errorHandler)

module.exports = app