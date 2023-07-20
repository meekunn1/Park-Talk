const express = require('express');
const path = require('path');
const withAuth = require('../utils/auth');
require('dotenv').config();

const router = express.Router();

// Handle the root route
router.get('/', (req, res) => {
  let logged_in = false;

  if(req.session.logged_in) {
    logged_in = true;
  }

  res.render('homepage', { logged_in });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/review', (req, res) => {
  const mapAPI = process.env.MAPS_API;
  const mapLocation = req.query.location;
  let logged_in = false;

  if(req.session.logged_in) {
    logged_in = true;
  }

  res.render('review', { mapAPI, mapLocation, logged_in });
});

router.get('/comments', withAuth, (req, res) => {
  res.render('comments', { logged_in: true });
});

module.exports = router;