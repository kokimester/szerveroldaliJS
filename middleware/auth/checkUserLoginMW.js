// ellenorzi, a felhasznalo belepo adatait
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        if((typeof res.locals.user === 'undefined') ||
            (typeof req.body.password === 'undefined'))
        {
            return next();
        }

        if (req.body.password === res.locals.user.password)
        {
            req.session.belepve = true;
            req.session.userID = res.locals.user._id;
            return req.session.save((err) => {
                return res.redirect('/');
            });
        }
        res.locals.error = "Hibás jelszó!";
        return next();
    }
}