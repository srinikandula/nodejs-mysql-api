const db = require('../config/dbConn');
const config = require('../config/config');

exports.welcome = async (req, res, next) => {
    try {
	  res.send('Welcome');
    } catch (e) {
        console.log(e);
        next({status: 500, message: e});
    }
}
