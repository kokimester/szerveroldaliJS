// creates a new user with given data on register page
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    
    return function(req, res, next) {

        if(
            (typeof req.body.name === 'undefined') ||
            (typeof req.body.phone === 'undefined') ||
            (typeof req.body.email === 'undefined') ||
            (typeof req.body.inputPassword1 === 'undefined') ||
            (typeof req.body.inputPassword2 === 'undefined')
        )
        {
            console.log('undefined nem adtal meg minden adatot');
            return next();
        }
        if(
            (req.body.name === '') ||
            (req.body.phone === '') ||
            (req.body.email === '') ||
            (req.body.inputPassword1 === '') ||
            (req.body.inputPassword2 === '')
        )
        {
            console.log('ures mezok');
            return next();
        }
        if(req.body.inputPassword1 !== req.body.inputPassword2)
        {
            console.log('nem egyezo jelszo');
            return next();
        }
        if(typeof res.locals.user !== 'undefined')
        {
            console.log('a user mar letezik');
            return next();
        }
        res.locals.user = new UserModel();

        res.locals.user.name = req.body.name;
        res.locals.user.phone = req.body.phone;
        res.locals.user.email = req.body.email;
        res.locals.user.password = req.body.inputPassword1;

        res.locals.user.save((err) =>{
            if(err)
            {
                return next(err);
            }

            console.log('saving new user');
            console.log(res.locals.user);
            return res.redirect('/login');
        });
    }
}