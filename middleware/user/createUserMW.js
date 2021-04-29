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
            res.locals.error = "Tölts ki minden mezőt!";
            return next();
        }
        const password = req.body.inputPassword1;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        if(password.length < 8)
        {
            res.locals.error = "A megadott jelszó túl rövid.";
            return next();
        }
        if(password === req.body.name)
        {
            res.locals.error = "A felhasználó neved nem lehet a jelszavad is.";
            return next();
        }
        if (hasUpperCase + hasLowerCase + hasNumbers < 3)
        {
            res.locals.error = "A jelszónak tartalmaznia kell kis- és nagybetűt valamint egy számot.";
            return next();
        }
        if(req.body.inputPassword1 !== req.body.inputPassword2)
        {
            res.locals.error = "A megadott jelszavak nem egyeznek."
            return next();
        }
        if(typeof res.locals.user !== 'undefined')
        {
            res.locals.error = "Ezzel az email címmel már regisztráltak."
            return next();
        }
        if(!(/^\+[0-9]{2} [0-9]{2} [0-9]{3} [0-9]{4}$/.test(req.body.phone)))
        {
            res.locals.error = "Nem megfelelő telefonszám formátum."
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
            return res.redirect('/login');
        });
    }
}