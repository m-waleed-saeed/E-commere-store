const User = require('../models/user')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

// Update User

const updateUser = asyncHandler(async (req, res) => {

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.bidy.password = await bcrypt.hash(req.body.password, salt)
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )

    if (!updatedUser) {
        res.status(400)
        throw new Error('User was not updated')
    } else {
        res.status(201).json(updatedUser)
    }
})

// Delete User

const deleteUser = asyncHandler(async (req, res) => {

    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
        res.status(400)
        throw new Error('User was not deleted successfully')
    } else {
        res.status(201).json('User was deleted successfully')
    }
})

// Get One User

const getUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(400)
        throw new Error('User was not found')
    } else {
        res.status(201).json(user)
    }
})

// Get All Users

const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find();

    if (!users) {
        res.status(400)
        throw new Error('User were not fetched      ')
    } else {
        res.status(200).json(users)
    }
})

module.exports = { getAllUsers, getUser, updateUser, deleteUser }