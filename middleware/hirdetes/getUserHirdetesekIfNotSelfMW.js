// lekerdezi egy user hirdeteseit, abban az esetben, ha ez nem onmaga

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    
    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
       
        if(res.locals.user._id == req.session.userID)
        {
            return res.redirect('/profil');
        }
        HirdetesModel.find({_felado : req.params.userid}).populate('_felado').exec((err,hirdetesek) => {
            if(err)
            {
                return next(err);
            }
            res.locals.hirdetesek = hirdetesek;
            return next();
        });
    }
}