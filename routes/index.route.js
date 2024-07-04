const express = require('express');
const router = express.Router();

// Routes
const welcomeRoutes = require('./welcome.route')
const authRoutes = require('./auth.route')

// router.use('/', welcomeRoutes);
router.use('/auth', authRoutes);

module.exports = router;
