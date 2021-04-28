// elmenti az eppen letrehozott/szerkesztett hirdetest az adatbazisba
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('----------Saving hirdetes---------')


        if( typeof(res.locals.impostor) !== 'undefined' && res.locals.impostor === true)
        {
            console.log(res.locals);
            console.log('dont edit other\'s posts');
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
            console.log('undefined something');
            return next();
        }
        if (typeof res.locals.hirdetes === 'undefined')
        {
            res.locals.hirdetes = new HirdetesModel();
        }

        console.log('a feltoltott fileok:')
        console.log(req.files);

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

            console.log('saving hirdetes changes');
            console.log(res.locals.hirdetes);
            res.redirect('/hirdetes/get/' + res.locals.hirdetes._id);
        })

    }
}