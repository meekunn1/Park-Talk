const express = require('express');
const path = require('path');
const withAuth = require('../utils/auth');
const { User, Review } = require('../models');
const { getMapLocation, getParkData } = require('../utils/helpers');

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
  const inputLocation = req.query.location;
  let logged_in = false;

  if (req.session.logged_in) {
    logged_in = true;
  }

  try {
    const mapLocation = await getMapLocation(inputLocation, mapAPI)
    const parkData = await getParkData(mapLocation)

    // Assuming you have models for Review and User defined
    const reviewData = await Review.findAll({
      where: {
        park_id: parkData.id
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render('review', { logged_in, mapAPI, mapLocation, reviews });
  } catch (error) {
    res.status(500).send('Error fetching data from Google Maps API (homeRoutes). Return to the homepage and try again.');
  }
});

router.get('/comments', withAuth, (req, res) => {
  res.render('comments', { logged_in: true });
});

module.exports = router;