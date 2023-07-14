const express = require('express');
const path = require('path');

const router = express.Router();

// Handle the root route
router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;