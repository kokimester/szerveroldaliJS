// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const UserModel = requireOption(objectrepository, 'UserModel');
    return function(req, res, next) {

        console.log('-----------saveChangedPwMW:-----------');

        console.log(req.body);
        if(
            (typeof req.body.inputOldPassword === 'undefined') ||
            (typeof req.body.inputNewPassword1 === 'undefined') ||
            (typeof req.body.inputNewPassword2 === 'undefined')
        )
        {
            console.log('insufficient req.body')
            return next();
        }
        if(
            (req.body.inputOldPassword === '') ||
            (req.body.inputNewPassword1 === '') ||
            (req.body.inputNewPassword2 === '')
        )
        {
            res.locals.error = "Ne hagyj üresen mezőket.";
            return next();
        }
        if(res.locals.user.password !== req.body.inputOldPassword)
        {
            res.locals.error = "Helytelen régi jelszó!";
            return next();
        }
        const password = req.body.inputNewPassword1;
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
        if(req.body.inputNewPassword1 !== req.body.inputNewPassword2)
        {
            res.locals.error = "A megadott jelszavak nem egyeznek."
            return next();
        }
      
        res.locals.user.password = password;
        res.locals.user.save((err) => {
            if(err)
            {
                return next(err);
            }
            console.log('/////////////saving new password//////////////////');
            return res.redirect('/profil');
        });
    }
}