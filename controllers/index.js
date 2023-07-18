const router = require('express').Router();

//section added by Keiji for test
const apiRoutes = require('./api');

//api routes
router.use('/api', apiRoutes);

//added by Keiji end.

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
