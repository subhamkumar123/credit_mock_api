const express = require('express');
const router = express.Router();

const returnData = require('./index.json')

router.post('/', function(req, res, next) {
    // console.log(req.body)
    let response = {
        customerInfo: returnData.customerInfo,
        requestStatus: "Ready to Review"
    }
    res.send(response)
})

module.exports = router