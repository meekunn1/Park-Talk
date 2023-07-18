const router = require('express').Router();
const parkRoutes = require('./park-routes');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./review-routes');

router.use('/park', parkRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
