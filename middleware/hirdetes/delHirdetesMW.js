// kitorli a megadott hirdetest az adatbazisbol
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {


        console.log('-----------delHirdetesMW:-----------')
        console.log(res.locals);
        console.log('deleting selected hirdetes');
        res.redirect('/hirdetes');
    }
}