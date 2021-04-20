// lementi az eppen szerkesztett/letrehozott felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------saveUserMW:-----------');

        if(
            (typeof req.body.nev === 'undefined') ||
            (typeof req.body.telefon === 'undefined')
        )
        {
            console.log('//////undefined nev or telefon/////////');
            return next();
        }

        
        res.redirect('/profil/' + res.locals.user._id);
        
    }
}