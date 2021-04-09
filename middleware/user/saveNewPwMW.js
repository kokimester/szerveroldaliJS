// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        console.log('-----------saveNewPwMW:-----------');
        
        
        console.log('saving new password:');
        console.log(res.locals.newPassword);
        next();
    }
}