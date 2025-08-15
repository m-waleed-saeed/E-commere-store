const express = require('express')
const router = express.Router()

const { getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/user')

//Get All Users
router.get('/',getAllUsers)

// Delete User
router.delete('/:id',deleteUser)

// Update router
router.put('/:id', updateUser)

// Get One router
router.get('/find/:userId',getUser)

module.exports = router