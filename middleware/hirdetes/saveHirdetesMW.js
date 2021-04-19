// elmenti az eppen letrehozott/szerkesztett hirdetest az adatbazisba
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {

        if(
            (typeof req.body.tipus === 'undefined') ||
            (typeof req.body.ar === 'undefined') ||
            (typeof req.body.szoveg === 'undefined') ||
            (typeof res.locals.user === 'undefined')
        )
        {
            console.log('undefined tipus ar vagy szoveg, || user');
            return next();
        }
        if (typeof res.locals.hirdetes === 'undefined')
        {
            res.locals.hirdetes = new HirdetesModel();
        }

        res.locals.hirdetes.ar = req.body.ar;
        res.locals.hirdetes.tipus = req.body.tipus;
        res.locals.hirdetes.szoveg = req.body.szoveg;
        res.locals.hirdetes._felado = res.locals.user;

        res.locals.hirdetes.save((err) =>{
            if(err)
            {
                return next(err);
            }

            console.log('saving hirdetes changes');
            console.log(res.locals.hirdetes);
            res.redirect('/hirdetes/get/' + res.locals.hirdetes._id);
        })

    }
}