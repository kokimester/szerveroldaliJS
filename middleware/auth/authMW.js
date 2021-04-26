// hitelesiti a felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        if(typeof req.session.belepve === 'undefined' || req.session.belepve !== true)
        {
            console.log('user is not logged in');
            return res.redirect('/');
        }


        console.log('----------authenticated user----------');
        next();
    }
}