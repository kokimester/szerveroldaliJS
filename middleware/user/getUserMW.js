// lekerdezi a user adatait ID alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('getting user by id: ' + JSON.stringify(res.locals));
        res.locals.user = {
            _id: 'koki',
            name: 'Fejes Daniel',
            phone: '+36-123-5463'
        };
        console.log(JSON.stringify(res.locals));
        next();
    }
}