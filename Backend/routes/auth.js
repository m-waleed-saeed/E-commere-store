const express = require('express')
const router = express.Router()

const { register, login, logout } = require('../controllers/auth')

//Register router
router.post('/register', register)

//ogin router
router.post('/login', login)

//Logout router
router.get('/logout', logout)

module.exports = router