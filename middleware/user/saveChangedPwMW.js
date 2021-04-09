// lementi az eppen ujonnan megadott jelszot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
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
        
        
        console.log('/////////////saving new password//////////////////');
        console.log(req.body);
        res.redirect('/profil/' + res.locals.user._id);
    }
}