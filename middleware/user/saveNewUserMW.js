// lementi az eppen letrehozott felhasznalo belepesi adatait
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------saveNewUserMW:-----------');

        console.log(req.body);
        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.phoneNumber === 'undefined') ||
            (typeof req.body.inputEmail === 'undefined') ||
            (typeof req.body.inputPassword1 === 'undefined') ||
            (typeof req.body.inputPassword2 === 'undefined')
        )
        {
            console.log('undefined nev, telefon, email or password');
            return next();
        }

        
        res.redirect('/');
        
    }
}