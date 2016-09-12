'use strict';
var express = require('express'),
    router = express.Router();

// router.use('/api/v1/users', require('./users'));
router.use('/api/tests', require('./tests'));

module.exports = router;
