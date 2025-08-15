const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const genrateToken = require('../config/genrateToken')

//Register User
//route POST api/v1/auth/register

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exsits')
    }

    const user = await User.create({
        name, email, password
    })
    if (user) {
        genrateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

// Login User
// route POST api/v1/auth/login

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && await (user.matchedPassword(password))) {
        genrateToken(res, user._id)
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
})


//Logout user
// route POST api/v1/auth/logout

const logout = asyncHandler(async (req, res) => {
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:'User logout successfully'})
})

module.exports={register,login,logout}