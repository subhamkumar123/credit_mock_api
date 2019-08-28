const express = require('express');
const router = express.Router();

const returnData = require('./index.json')

router.post('/', function(req, res, next) {
    res.send(returnData)
})

module.exports = router