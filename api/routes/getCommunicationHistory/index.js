const express = require('express');
const data = require('./index.json.js');

const router = express.Router();

router.post('/', (req, res) => {
  res.send(data);
});

module.exports = router;
