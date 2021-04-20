// kijelentkezteti a felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        req.session.belepve = false;
        req.session.destroy( (err) => {
            // cannot access session here
            console.log('logging out user');
            res.redirect('/');
          });
    }
}