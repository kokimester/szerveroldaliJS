// kitorli a megadott hirdetest az adatbazisbol
var requireOption = require('../common').requireOption;
const fs = require('fs');

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function (req, res, next) {

        if ((typeof res.locals.hirdetes === 'undefined')) {
            return next();
        }

        res.locals.hirdetes.remove((err) => {
            if (err) {
                return next(err);
            }
            console.log('trying to delete files');
            res.locals.hirdetes.kepek.forEach(function (egyKep) {
                fs.unlink(egyKep, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                })});

            res.redirect('/hirdetes');
        });

    }
}
