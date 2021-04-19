// lekerdezi a megadott ID-ju hirdetest az adatbazisbol.
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('-------------getting hirdetes from db------------');

        HirdetesModel.findOne({ _id : req.params.hirdetesid }).populate('_felado').exec((err,hirdetes) => {
            if(err || !hirdetes)
            {
                return next(err);
            }
            res.locals.hirdetes = hirdetes;
            console.log('a kiadott hirdetes:')
            console.log(hirdetes);
            return next();
        });
    }
}