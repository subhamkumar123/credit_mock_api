const express = require("express");
const data = require("./index.json");

const router = express.Router();

router.post("/", (req, res) => {
    res.send(data);
});

module.exports = router;
