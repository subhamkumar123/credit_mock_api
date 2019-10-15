/* eslint-disable array-callback-return */
const express = require('express');

const router = express.Router();
const multer = require('multer')();
const data = require('./index.json');

router.post('/', multer.none(), (req, res) => {
  const requestData = JSON.parse(req.body.data);
  // eslint-disable-next-line consistent-return
  const returnData = data.find((customerData) => {
    if (
      requestData.customerId === customerData.customerId
      && requestData.requestId === customerData.requestId
    ) {
      return customerData;
    }
  });
  res.send(returnData);
});

module.exports = router;
