// hitelesiti a felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('authenticating user');
        next();
    }
}