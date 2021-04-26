// lekerdezi a user adatait ID alapjan az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');

    return function(req, res, next) {
        console.log('----------- getUserMW: -----------');
        
        UserModel.findOne({_id : req.params.userid}).exec((err,user) => {
            if(err || !user )
            {
                console.log('user not in db');
                return next(err);
            }
            res.locals.user = user;
            console.log(user);
            return next();
        });
    }
}