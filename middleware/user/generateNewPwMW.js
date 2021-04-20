// general egy random jelszot a felhasznalonak amivel belephet
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        
        console.log('-----------generateNewPwMW:-----------');

        if(typeof res.locals.user === 'undefined')
        {
            return next();
        }
        res.locals.newPassword = Math.random().toString(36).substr(2, 8);

        next();
    }
}