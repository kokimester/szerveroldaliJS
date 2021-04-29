// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        
        if(typeof res.locals.user === 'undefined')
        {
            return next();
        }
        res.locals.user.password = res.locals.newPassword;
        return res.locals.user.save((err) => {
            if(err)
            {
                return next(err);
            }
            return next();
        })
    }
}