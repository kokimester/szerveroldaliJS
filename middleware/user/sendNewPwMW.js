// elkuldi a felhasznalonak az uj jelszavat
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------sendNewPwMW:-----------');
        
        if(typeof res.locals.user === 'undefined')
        {
            return next();
        }
        console.log('Your new password is: ')
        console.log(res.locals.newPassword);

        res.redirect('/login');
    }
}