const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('test express');
  res.send('hello express');
});

module.exports = router;
