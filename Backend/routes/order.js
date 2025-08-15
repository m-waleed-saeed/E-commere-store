const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders } = require('../controllers/order')
const express = require('express')
const protect = require('../middlewares/auth')
const router = express.Router()

// Create Order 
router.post('/', createOrder)

// Update Order 
router.put('/:id', updateOrder)

// Get All Order 
router.get('/', protect, getAllOrders)

// Delete Order 
router.delete('/:id', deleteOrder)

// Get User Order 
router.get('/find/:userId', getUserOrder)

module.exports = router