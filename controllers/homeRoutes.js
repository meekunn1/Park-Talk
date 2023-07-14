const express = require('express');
const path = require('path');

const router = express.Router();

// Handle the root route
router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

module.exports = router;