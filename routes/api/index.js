// using express for router
const router = require('express').Router();
// require user routes
const userRoutes = require('./user-routes');
// require thought routes
const thoughtRoutes = require('./thought-routes');

// using router for user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//exporting the router
module.exports = router;