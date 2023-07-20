const router = require('express').Router();
const { response } = require('express');
const { Park } = require('../../models');
const axios = require('axios');
require('dotenv').config();

// The `/api/park` endpoint
router.post('/', async (req, res) => {
  const mapAPI = process.env.MAPS_API;
  // The user submitted address before it has been passed to the geocode API
  const inputLocation = req.body.searchInput;

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputLocation}}&key=${mapAPI}`);
    // Returns the fully formatted address translated from inputLocation
    const mapLocation = response.data.results[0].formatted_address;
    const parkData = await Park.findOne({ where: { address: mapLocation } });

    if (parkData === null) {
      console.log('Creating New Park');

      const newPark = await Park.create({
        address: mapLocation
      });

      res.status(200).json(newPark);
    } else {
      console.log('Loading Existing Park');
      res.status(200).json(parkData);
    }
  } catch (error) {
    res.status(500).send('Error fetching data from Google Maps API (park-routes). Return to the homepage and try again.');
  }
});

// find all park
// router.get('/', async (req, res) => {
//   try {
//     const parkData = await Park.findAll();
//     res.status(200).json(parkData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   // find one park by its `id` value
//   try {
//     const parkData = await Park.findByPk(req.params.id);
//     res.status(200).json(parkData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', async (req, res) => {
//   // update a park by its `id` value
//   try {
//     const parkData = await Park.update(req.body, {where: {id: req.params.id,}});
//     res.status(200).json(parkData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   // delete a park by its `id` value
//   try {
//     const parkData = await Park.destroy({
//       where: {
//         id: req.params.id
//       }
//     });
//     res.status(200).json(parkData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
