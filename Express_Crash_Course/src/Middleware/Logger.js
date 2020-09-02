const moment = require('moment');
// Middleware Function
const logger = (req, rs,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
    
}

module.exports = logger;