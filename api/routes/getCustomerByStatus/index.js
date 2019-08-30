const express = require("express");
const router = express.Router();

const data = require("./index.json");
let multer = require("multer")();
router.post("/", multer.none(), function(req, res, next) {
  let requestData = JSON.parse(req.body.data);
  let response = {};
  if (requestData.status === "Ready to Review") {
    // let customerInfo = data.customerInfo.filter(customer => {
    //   if (
    //     customer.bankReference === "Available" &&
    //     customer.tradeReference === "Available"
    //   ) {
    //     return customer;
    //   }
    // });

    response.customerInfo = data.customerInfo;
    response.requestStatus = "Ready to Review";
  }
  if (requestData.status === "Pending Information") {
    // let customerInfo = data.customerInfo.filter(customer => {
    //   if (
    //     customer.bankReference === "Pending" ||
    //     customer.tradeReference === "Pending"
    //   ) {
    //     return customer;
    //   }
    // });

    response.customerInfo = data.customerInfo;
    response.requestStatus = "Pending Information";
  }
  if (requestData.status === "Auto approved") {
    // let customerInfo = data.customerInfo.filter(customer => {
    //   if (
    //     customer.bankReference === "Available" &&
    //     customer.tradeReference === "Available" &&
    //     customer.approvedCreditLimit != undefined
    //   ) {
    //     return customer;
    //   }
    // });

    response.customerInfo = data.customerInfo;
    response.requestStatus = "Auto approved";
  }
  res.send(response);
});

module.exports = router;
