const express = require("express");
const data = require("./index.json");

const router = express.Router();
const multer = require("multer")();

router.post("/", multer.none(), (req, res) => {
    const requestData = JSON.parse(req.body.data);
    const returnData = data.find(customerData => {
        if (
            requestData.customerId === customerData.customerId &&
            requestData.creditRequestId === customerData.creditRequestId &&
            requestData.toEmailId === customerData.toEmailId &&
            requestData.subject === customerData.subject &&
            requestData.body === customerData.body &&
            requestData.corrHeaderId === customerData.corrHeaderId &&
            requestData.corrTypeId === customerData.corrTypeId &&
            requestData.emailTemplateId === customerData.emailTemplateId &&
            requestData.replyTo === customerData.replyTo &&
            requestData.senderEmail === customerData.senderEmail
        ) {
            return customerData;
        }
    });
    res.send(returnData);
});

module.exports = router;
