const express = require("express");

const router = express.Router();
const multer = require("multer")();
const data = require("./index.json");

router.post("/", multer.none(), (req, res) => {
    const requestData = JSON.parse(req.body.data);
    const response = {};
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
    if (requestData.status === "Auto Approved") {
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
        response.requestStatus = "Auto Approved";
    }
    res.send(response);
});

module.exports = router;
