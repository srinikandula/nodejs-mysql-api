const express = require('express');
const passport = require('passport');

const router = express.Router();

const AuthController = require('../controllers/authController');

function checkValidations(req, res, next) {
    const userObj = req.body;
    if (!userObj.username && !userObj.password) {
        return res.status(400).json({message: 'Please enter a Email and Password'});
    }else if (!userObj.username) {
        return res.status(400).json({ message: 'INVALID_USERNAME'});
    }else if (!userObj.password) {
        return res.status(400).json({message: 'INVALID_PASSWORD'});
    }
    next();
}

router.post('/login', checkValidations, passport.authenticate('local', {session: false}),(req, res) => {
    AuthController.login(req, result => {
        res.status(result.status).json(result);
    })
});


router.post('/me', passport.authenticate('jwt', {session: true}), (req, res) => {
    AuthController.login(req, result => {
        res.status(result.status).json(result);
    })
});

router.post('/register', (req, res) => {
    AuthController.register(req, result => {
        res.status(result.status).json(result);
    })
});
module.exports = router;
