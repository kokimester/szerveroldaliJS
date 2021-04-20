// ellenorzi, a felhasznalo belepo adatait
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        if(typeof res.locals.user === 'undefined')
        {
            console.log('nincs ilyen user');
            return next();
        }

        if (typeof req.body.password === 'undefined')
        {
            return next();
        }

        if (req.body.password === res.locals.user.password)
        {
            req.session.belepve = true;
            req.session.userID = res.locals.user._id;
            return req.session.save((err) => {
                console.log('user logged in, ID: ' + req.session.userID);
                return res.redirect('/');
            });
        }
        console.log('hibas jelszo');
        res.locals.error = "Hibas jelszo!";
        return next();
    }
}