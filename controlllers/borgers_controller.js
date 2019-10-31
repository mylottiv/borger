// Init Express Router
const express = require('express');
const router = express.Router()

// Import borger Model
const borger = require('../models/borger');

// Router get routes
router.get('/:index?', function (req, res, next) {
    if (!req.param.index || req.param.index === 'index' || req.param.index === 'home') {
        res.render('index');
    }
    else {
        res.next();
    }
});

router.get('/api/borgers/:borger?');

// Router post routes
router.post('/api/borgers');

// Router put routes
router.put('/api/borgers');

// Export router
module.exports = router;