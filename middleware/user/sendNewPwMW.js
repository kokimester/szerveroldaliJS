// elkuldi a felhasznalonak az uj jelszavat
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('sending new pw to user');
        next();
    }
}