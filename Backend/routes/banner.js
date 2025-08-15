const { createBanner, deleteBanner ,getAllBanner,  getRandomBanner } = require('../controllers/banner')
const express = require('express')
const router = express.Router()

// Create Banner 
router.post('/', createBanner)

// Get All Banner 
router.get('/', getAllBanner)
 
// Delete Banner 
router.delete('/:id', deleteBanner)

// Delete Banner 
router.get('/random',getRandomBanner)

module.exports = router