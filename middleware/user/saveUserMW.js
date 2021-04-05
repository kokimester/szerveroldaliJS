// lementi az eppen szerkesztett/letrehozott felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        if(
            (typeof req.body.nev === 'undefined') ||
            (typeof req.body.telefon === 'undefined')
        )
        {
            console.log('undefined nev or telefon');
            return next();
        }


        console.log('saving user data');
        
        res.redirect('/profil/' + res.locals.user._id);
        
    }
}