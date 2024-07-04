const express = require('express');
const passport = require('passport');

const router = express.Router();
const WelcomeController = require('../controllers/welcomeController');

// authenticated Routes
router.use(passport.authenticate('jwt', { session: false }));

router.get('/', (req, res) => {
    WelcomeController.welcome(req, result => {
        res.status(result.status).json(result);
    });
});


module.exports = router;
