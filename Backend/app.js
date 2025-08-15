const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middlewares/error');
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')
const bannerRoutes = require('./routes/banner')
const userRoutes = require('./routes/user')

const app = express();

// express dot json
app.use(express.json())

//cookie-parser
app.use(cookieParser())

// cors
app.use(cors())

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/banners', bannerRoutes)
app.use('/api/v1/users', userRoutes)

// Error middleware
app.use(notFound)
app.use(errorHandler)

module.exports = app