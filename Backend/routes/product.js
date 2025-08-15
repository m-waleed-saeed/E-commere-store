const { createProduct, deleteProduct, updateProduct, getProduct, getAllProduct, ratingProduct } = require('../controllers/product')
const express = require('express')
const router = express.Router()

// Rating Product 
router.put('/rating/:productId', ratingProduct)

// Get All Product 
router.get('/', getAllProduct)

// Get One Product 
router.get('/find/:id', getProduct)

// Create Product 
router.post('/', createProduct)

// Update Product 
router.put('/:id', updateProduct)

// Delete Product 
router.delete('/:id', deleteProduct)

module.exports = router