const router = require('express').Router();
const { Park } = require('../../models');

// The `/api/park` endpoint
// Maybe need to add session or auth feature.

// find all park
router.get('/', async (req, res) => {
  try {
    const parkData = await Park.findAll();
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one park by its `id` value
  try {
    const parkData = await Park.findByPk(req.params.id);
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new park
  try {
    const parkData = await Park.create(req.body);
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a park by its `id` value
  try {
    const parkData = await Park.update(req.body, {where: {id: req.params.id,}});
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a park by its `id` value
  try {
    const parkData = await Park.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(parkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
