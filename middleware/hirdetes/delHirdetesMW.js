// kitorli a megadott hirdetest az adatbazisbol
var requireOption = require('../common').requireOption;
const fs = require('fs');

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function (req, res, next) {

        console.log('------deleting post!--------');
        if ((typeof res.locals.hirdetes === 'undefined')) {
            return next();
        }

        if( typeof(res.locals.impostor) !== 'undefined' && res.locals.impostor === true)
        {
            console.log(res.locals.impostor);
            console.log('dont delete other\'s posts');
            res.redirect('/hirdetes');
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

            return res.redirect('/hirdetes');
        });

    }
}
