var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Test = require('../models/test.js'),
    db = require('../models'),
    logger = require('../helpers/logger');

module.exports = router;

// get a list of product
router.get('/list/:page/:limit', function(req, res) {
    var limit = (req.params.limit) ? req.params.limit : 10;
    var skip = (req.params.page) ? limit * (req.params.page - 1) : 0;
    db.Test
        .find()
        .skip(skip)
        .limit(limit)
        .sort({
            '_id': 'desc'
        })
        .then(function(users) {
            res.send(JSON.stringify(users));
        }).catch(function(e) {
            res.status(500).send(JSON.stringify(e));
        });
});


// get a product by id
router.get('/get/:id', function(req, res) {
    logger.debug('Get Product By Id', req.params.id);
    db.Test.findOne({
        _id: req.params.id
    }).then(function(product) {
        res.send(JSON.stringify(product));
    }).catch(function(e) {
        res.status(500).send(JSON.stringify(e));
    });
});

// create a new product
router.post('/create', function(req, res, next) {
  Test.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
