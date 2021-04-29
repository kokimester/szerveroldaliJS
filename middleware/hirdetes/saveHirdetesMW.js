// elmenti az eppen letrehozott/szerkesztett hirdetest az adatbazisba
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {


        if( typeof(res.locals.impostor) !== 'undefined' && res.locals.impostor === true)
        {
            res.redirect('/hirdetes');
            return next();
        }

        if(
            (typeof req.body.tipus === 'undefined') ||
            (typeof req.body.ar === 'undefined') ||
            (typeof req.body.szoveg === 'undefined') ||
            (typeof res.locals.user === 'undefined') ||
            (typeof req.files === 'undefined')
        )
        {
            return next();
        }
        if (typeof res.locals.hirdetes === 'undefined')
        {
            res.locals.hirdetes = new HirdetesModel();
        }

        req.files.forEach(function(egyFile){
            res.locals.hirdetes.kepek.push(egyFile.path);
        });
        
        if(req.body.ar[0] === '-')
        {
            res.locals.error = "Ne adj meg negatív árat!";
            return next();
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
            res.redirect('/hirdetes/get/' + res.locals.hirdetes._id);
        })

    }
}