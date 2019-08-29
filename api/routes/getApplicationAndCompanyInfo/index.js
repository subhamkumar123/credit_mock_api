const express = require("express");
const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), function(req, res, next) {
  let requestData = JSON.parse(req.body.data);
  let returnData = data.find(customerData => {
    if (
      requestData.customerId == customerData.customerId &&
      requestData.requestId == customerData.requestId
    ) {
      return customerData;
    }
  });
  res.send(returnData);
});

module.exports = router;
