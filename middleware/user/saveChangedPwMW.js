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
            console.log('hulyegyerek toltsd ki a mezoket')
            return next();
        }
        if(res.locals.user.password !== req.body.inputOldPassword)
        {
            console.log('helytelen jelszo');
            return next();
        }
        if(req.body.inputNewPassword1 !== req.body.inputNewPassword2)
        {
            console.log('nem ugyanazt adtad meg ketszer');
            return next();
        }
        res.locals.user.password = req.body.inputNewPassword1;
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