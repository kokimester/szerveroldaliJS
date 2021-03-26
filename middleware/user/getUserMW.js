// lekerdezi a user adatait ID alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('getting user by id: ' + JSON.stringify(res.locals));
        res.locals.user = {
            _id: 'koki'
        };
        console.log(JSON.stringify(res.locals));
        next();
    }
}