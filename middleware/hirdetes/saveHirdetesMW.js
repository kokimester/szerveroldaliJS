// elmenti az eppen letrehozott/szerkesztett hirdetest az adatbazisba
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {

        if(
            (typeof req.body.tipus === 'undefined') ||
            (typeof req.body.ar === 'undefined') ||
            (typeof req.body.szoveg === 'undefined')
        )
        {
            console.log('undefined tipus ar vagy szoveg');
            return next();
        }

        console.log('saving hirdetes changes');
        res.redirect('/hirdetes/get/' + res.locals.hirdetes._id);
    }
}