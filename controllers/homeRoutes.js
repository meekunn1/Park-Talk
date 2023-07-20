const express = require('express');
const path = require('path');
const withAuth = require('../utils/auth');
const { Park } = require('../models');
const axios = require('axios');

const router = express.Router();

// Handle the root route
router.get('/', async (req, res) => {
  let logged_in = false;

  if (req.session.logged_in) {
    logged_in = true;
  }

  res.render('homepage', { logged_in });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/review', async (req, res) => {
  const mapAPI = process.env.MAPS_API;
  // The user submitted address before it has been passed to the geocode API
  const inputLocation = req.query.location;
  let logged_in = false;

  if (req.session.logged_in) {
    logged_in = true;
  }

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputLocation}}&key=${mapAPI}`);
    const mapLocation = response.data.results[0].formatted_address;
  
    res.render('review', { logged_in, mapAPI, mapLocation });
  }
  catch (err) {
    res.status(500).send('Error fetching data from Google Maps API (homeRoutes). Return to the homepage and try again.');
  }
});

router.get('/comments', withAuth, (req, res) => {
  res.render('comments', { logged_in: true });
});

module.exports = router;