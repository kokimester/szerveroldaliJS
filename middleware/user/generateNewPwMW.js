// general egy random jelszot a felhasznalonak amivel belephet
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        
        console.log('-----------generateNewPwMW:-----------');

        res.locals.newPassword = 'SomeRandomString';

        next();
    }
}