// ellenorzi jogosult e torolni/szerkeszteni a belepett user az adott hirdetest

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        
        if( (typeof(res.locals.hirdetes) === 'undefined' ) || 
            (typeof(res.locals.user) ==='undefined')
            )
            {
                return next();
            }
        if(res.locals.hirdetes._felado._id != res.locals.session.userID)
            {
                res.locals.impostor = true;
                return res.redirect('/');
            }
        else{ res.locals.impostor = false; }
            return next();
    }
}