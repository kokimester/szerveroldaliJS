// elkuldi a felhasznalonak az uj jelszavat
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        console.log('-----------sendNewPwMW:-----------');
        if(typeof req.body.inputEmail === 'undefined')
        {
            console.log('undefined email address');
            return next();
        }
        console.log('Your new password is: ')
        console.log(res.locals.newPassword);
        res.redirect('/');
    }
}