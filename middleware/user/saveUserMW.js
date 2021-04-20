// lementi az eppen szerkesztett felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------saveUserMW:-----------');

        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.phone === 'undefined')
        )
        {
            console.log('//////undefined nev or telefon/////////');
            return next();
        }
        if(
            (req.body.name === '') ||
            (req.body.phone === '')
        )
        {
            console.log('//////ures sorok/////////');
            return next();
        }

        res.locals.user.name = req.body.name;
        res.locals.user.phone = req.body.phone;

        res.locals.user.save((err) => 
        {
            if(err)
            {
                return next(err);
            }
            console.log('saving user changes');
            res.redirect('/profil');
        })

        
    }
}