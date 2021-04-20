// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {

        console.log('-----------saveNewPwMW:-----------');
        
        if(typeof res.locals.user === 'undefined')
        {
            return next();
        }
        console.log('saving new password:');
        res.locals.user.password = res.locals.newPassword;
        return res.locals.user.save((err) => {
            if(err)
            {
                console.log('error saving new pass');
                return next(err);
            }
            return next();
        })
    }
}