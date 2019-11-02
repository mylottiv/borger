// Init Express Router
const express = require('express');
const router = express.Router()

// Import borger Model
const Borger = require('../models/borger');

// Router get routes
router.get('/:index?', function (req, res, next) {
    if (!req.param.index || req.param.index === 'index' || req.param.index === 'home') {
        Borger.displayBorgers(function(borgers) {
            uneaten_borgers = borgers.filter((borger) => (borger.devoured === 0));
            devoured_borgers = borgers.filter((borger) => (borger.devoured === 1));
            res.render('index', {uneaten_borgers, devoured_borgers});
        });
    }
    else {
        res.next();
    }
});

// Borgers API get route for all borgers OR individual borgers
router.get('/api/borgers/:borger?');

// Router post routes
router.post('/api/borgers', function(req, res) {
    Borger.addBorger(req.body.name, function(result){
        console.log('borger successfully added', result);
        res.send('Post request fulfilled successfully');
    })

});

// Router put routes
router.put('/api/borgers', function(req, res) {
    console.log(req.body.id)
    Borger.devourBorger(req.body.id, function(result){
        console.log('Borger successfully devoured', result);
        res.send('Put request fulfilled successfully');
    })
});

// Export router
module.exports = router;