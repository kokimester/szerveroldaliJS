// lementi az eppen letrehozott felhasznalo belepesi adatait
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        console.log('-----------saveNewUserMW:-----------');

        console.log(req.body);
        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.phoneNumber === 'undefined') ||
            (typeof req.body.inputEmail === 'undefined') ||
            (typeof req.body.inputPassword2[0] === 'undefined') ||
            (typeof req.body.inputPassword2[1] === 'undefined')
        )
        {
            console.log('undefined nev, telefon, email or password');
            return next();
        }

        
        res.redirect('/');
        
    }
}