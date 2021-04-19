// kitorli a megadott hirdetest az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    
    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {

        if( (typeof res.locals.hirdetes === 'undefined') )
        {
            return next();
        }

        res.locals.hirdetes.remove((err) =>
        {
            if(err){
                return next(err);
            }
            res.redirect('/hirdetes');
        });

    }
}