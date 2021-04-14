// lekerdezi az osszes hirdetest az adatbazisbol
// ez a fooldalon van hasznalva, mert ott megjelenik az osszes hirdetes
// kesobbiekben limitalva lesz valoszinuleg 25 legkerdezesre, teljesitmenyszempontok miatt
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('-----------getHirdetesekMW:-----------')
       
        HirdetesModel.find({}).populate('_felado').exec((err,hirdetesek) => {
            if(err)
            {
                return next(err);
            }
            res.locals.hirdetesek = hirdetesek;
            return next();
        });
    }
}