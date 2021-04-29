// lementi az eppen szerkesztett felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {
        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.phone === 'undefined')
        )
        {
            return next();
        }
        if(
            (req.body.name === '') ||
            (req.body.phone === '')
        )
        {
            res.locals.error = "Nem adtál meg minden adatot."
            return next();
        }

        if(!(/^\+[0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4}$/.test(req.body.phone)))
        {
            res.locals.error = "Nem megfelelő telefonszám formátum."
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
            res.redirect('/profil');
        })

        
    }
}