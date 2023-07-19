const express = require('express');
const path = require('path');
require('dotenv').config();

const router = express.Router();

// Handle the root route
router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/review', (req, res) => {
  const mapAPI = process.env.MAPS_API;
  const mapLocation = req.query.location;
  res.render('review', { mapAPI, mapLocation });
});

router.get('/comments', (req, res) => {
  res.render('comments');
});

module.exports = router;