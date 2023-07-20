const router = require('express').Router();
require('dotenv').config();
const { Park } = require('../../models');
const { getMapLocation, getParkData } = require('../../utils/helpers');

router.get('/', async (req, res) => {
  // find one park by its `id` value
  try {
    const parkData = await Park.findOne({ where: { address: req.query.location } });
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// The `/api/park` endpoint
router.post('/', async (req, res) => {
  const mapAPI = process.env.MAPS_API;
  const inputLocation = req.body.searchInput;

  try {
    const mapLocation = await getMapLocation(inputLocation, mapAPI)
    const parkData = await getParkData(mapLocation)

    if (parkData) {
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
