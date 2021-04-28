// lekerdezi az osszes hirdetest az adatbazisbol
// ez a fooldalon van hasznalva, mert ott megjelenik az osszes hirdetes
// kesobbiekben limitalva lesz valoszinuleg 25 legkerdezesre, teljesitmenyszempontok miatt
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('-----------getHirdetesekMW:-----------')
       
        if(typeof(req.body.searchBy) !== 'undefined' && req.body.searchBy !== null && req.body.searchBy !== '')
        {
            
            const searchBy = req.body.searchBy;
            HirdetesModel.find({ tipus : {$regex : new RegExp(searchBy, 'i') } }).populate('_felado').exec((err,hirdetesek) => {
                if(err)
                {
                    return next(err);
                } 
                console.log('trying to find hirdetesek which contains: '+searchBy);
                console.log(hirdetesek);
                res.locals.hirdetesek = hirdetesek;
                return next();
            });
        }


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