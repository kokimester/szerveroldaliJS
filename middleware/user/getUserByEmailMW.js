// lekerdezi a user adatait email alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {

        if(req.session.belepve !== 'undefined' && req.session.belepve === true)
        {
            return res.redirect('/');
        }

        if(typeof req.body.email === 'undefined')
        {
            return next();
        }

       UserModel.findOne({ email : req.body.email }).exec((err,user) => {
            if(err)
            {
                return next(err);
            }
            if(!user)
            {
                res.locals.error = "Nincs ilyen felhasználó!";
                return next();
            }
            res.locals.user = user;
            return next();
        });
    }
}