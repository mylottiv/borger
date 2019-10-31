// Init Express Router
const express = require('express');
const router = express.Router()

// Import borger Model
const borger = require('models/borger.js');

// Router get routes
router.get('/:index?');

router.get('/api/borgers/:borger?');

// Router post routes
router.post('/api/borgers');

// Router put routes
router.put('/api/borgers');

// Export router
module.exports = router;