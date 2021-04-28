// ellenorzi jogosult e torolni/szerkeszteni a belepett user az adott hirdetest

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        console.log('-----------checkUserPrivilegeMW: -----------');
        
        if( (typeof(res.locals.hirdetes) === 'undefined' ) || 
            (typeof(res.locals.user) ==='undefined')
            )
            {
                console.log('user or hirdetes not found, cant check privilege');
                return next();
            }

            console.log(res.locals.hirdetes._felado._id);
            console.log(res.locals.session.userID);
        if(res.locals.hirdetes._felado._id != res.locals.session.userID)
            {
                console.log('-----------SETTING IMPOSTOR TO TRUE-----------');
                console.log(res.locals.hirdetes._felado);
                console.log(res.locals.user);
                res.locals.impostor = true;
                return res.redirect('/');
            }
        else{ res.locals.impostor = false; }
            return next();
    }
}