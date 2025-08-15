const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user')
const dotenv = require('dotenv')

dotenv.config();

const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;

    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findById(decodedToken.userId).select('-password');
            next()
        } catch (error) {
            res.status(401);
            throw new Error('Not autherized, no token')
        }
    } else {
        res.status(401);
        throw new Error('Not autherized, no token')
    }
})

module.exports = protect