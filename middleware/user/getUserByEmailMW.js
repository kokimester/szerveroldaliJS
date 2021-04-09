// lekerdezi a user adatait email alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('-----------getUserByEmailMW:-----------');

        if(typeof req.body.inputEmail === 'undefined')
        {
            console.log('undefined email address');
            return next();
        }


        next();
    }
}