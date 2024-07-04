const db = require('../config/dbConn');
const config = require('../config/config');
const jwt = require("jsonwebtoken");


async function generateToken(user, next) {
    try {
        const token = jwt.sign(user, config.jwtSecret, {expiresIn: config.jwt.options.expiresIn});
        const loggedInUserDetails = await db.userModel.findOne({where: {id: user.id}});
        if(loggedInUserDetails) {
            await db.userModel.update({accessToken: token}, {where: {id: user.id}});
        }
        next(token);
    } catch (err) {
        console.error('TOKEN_ERROR:', err);
    }
}

exports.login = async (req, next) => {
    try{
        const loggedInUser = {
            username: req.user.username,
            email: req.user.email,
            id: req.user.id,
            password: req.user.password
        };
        await generateToken(loggedInUser, token => {
            next({
                status: 200,
                email: req.user.email,
                id: req.user.id,
                username: req.user.username,
                token: token,
                expiresIn: '43200',
                message: "LOGGED_IN_SUCCESSFULLY"
            });
        });
    }catch (e) {
        console.log(e)
        next({status: 500, message: e});
    }
}

exports.register = async (req, next) => {
    try{
        const userData = {
            username: req.body.username,
            email: req.body.email
        };
        const isEmailExist = await db.userModel.findOne({
            where: {email: userData.email}, raw: true
        });
        const isUsernameExist = await db.userModel.findOne({
            where: {username: userData.username}, raw: true
        });
        if (isEmailExist) {
            return next({status: 400, message: 'EMAIL_EXISTS'});
        }
        if (isUsernameExist) {
            return next({status: 400, message: 'USERNAME_EXISTS'});
        }else {
            const result = await db.userModel.create(userData);
            next({status:200, result, message: 'USER_REGISTERED'});
        }
    }catch (e) {
        console.log(e)
        next({status: 500, message: e});
    }
}
