// lekerdezi egy user sajat hirdeteseit
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('cgetting user\'s own hirdetesek');
        next();
    }
}