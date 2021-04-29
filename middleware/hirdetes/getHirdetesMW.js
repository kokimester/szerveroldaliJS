// lekerdezi a megadott ID-ju hirdetest az adatbazisbol.
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {

        HirdetesModel.findOne({ _id : req.params.hirdetesid }).populate('_felado').exec((err,hirdetes) => {
            if(err || !hirdetes)
            {
                return next(err);
            }
            res.locals.hirdetes = hirdetes;
            return next();
        });
    }
}