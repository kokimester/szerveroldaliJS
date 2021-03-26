// ellenorzi, hogy be van e lepve a felhasznalo
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('checking user login creditentials');
        next();
    }
}