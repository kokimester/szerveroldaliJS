// lekerdezi a user adatait email alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        console.log('-----------getUserByEmailMW:-----------');

        if(req.session.belepve !== 'undefined' && req.session.belepve === true)
        {
            console.log("user is logged in, cannot login again");
            return res.redirect('/');
        }

        if(typeof req.body.email === 'undefined')
        {
            console.log('undefined email address');
            return next();
        }

       UserModel.findOne({ email : req.body.email }).exec((err,user) => {
            if(err)
            {
                return next(err);
            }
            if(!user)
            {
                console.log('nincs ilyen email az adatbazisban');
                res.locals.error = "Nincs ilyen felhasználó!";
                return next();
            }
            res.locals.user = user;
            console.log('a megtalalt user:')
            console.log(user.name);
            return next();
        });
    }
}