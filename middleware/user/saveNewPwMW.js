// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------saveNewPwMW:-----------');
        
        
        console.log('saving new password:');
        console.log(res.locals.newPassword);
        next();
    }
}