//kitorli az utoljara feltoltott kepet a hirdetesbol


var requireOption = require('../common').requireOption;
const fs = require('fs');

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {

            if (typeof res.locals.hirdetes === 'undefined')
            {
                res.redirect('/hirdetes');
                return next();
            }

            if( typeof(res.locals.impostor) !== 'undefined' && res.locals.impostor === true)
            {
                res.redirect('/hirdetes/get/' + res.locals.hirdetes._id);
                return next();
            }


            fs.unlink(res.locals.hirdetes.kepek[res.locals.hirdetes.kepek.length-1], (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            res.locals.hirdetes.kepek.pop();
            res.locals.hirdetes.save((err) =>{
                if(err)
                {
                    return next(err);
                }
                return res.redirect('/hirdetes/edit/' + res.locals.hirdetes._id);
            });
    }
}