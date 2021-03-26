// creates a new user with given data on register page
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('creating new user');
        next();
    }
}