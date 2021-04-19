// lekerdezi egy user sajat hirdeteseit
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    
    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('----------- getUserHirdetesekMW: -----------');

        if(!res.locals.user)
        {
            return next('undefined user');
        }

        HirdetesModel.find({_felado : res.locals.user._id}).populate('_felado').exec((err,hirdetesek) => {
            if(err)
            {
                return next(err);
            }
            res.locals.hirdetesek = hirdetesek;
            console.log(hirdetesek);
            return next();
        });
        
        
    }
}