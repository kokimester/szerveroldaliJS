// lekerdezi egy user hirdeteseit, abban az esetben, ha ez nem onmaga

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    
    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('----------- getUserHirdetesekIfNotSelfMW: -----------');
       
        if(res.locals.user._id == req.session.userID)
        {
            console.log('/////////uh oh, checking your own profile/////////');
            return res.redirect('/profil');
        }
        HirdetesModel.find({_felado : req.params.userid}).populate('_felado').exec((err,hirdetesek) => {
            if(err)
            {
                console.log('error happened');
                return next(err);
            }
            console.log(hirdetesek);
            res.locals.hirdetesek = hirdetesek;
            return next();
        });
    }
}