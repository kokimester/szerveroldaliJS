// kitorli a megadott hirdetest az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('deleting selected hirdetes');
        next();
    }
}