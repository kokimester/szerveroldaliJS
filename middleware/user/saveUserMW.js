// lementi az eppen szerkesztett/letrehozott felhasznalot
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('saving user data');
        next();
    }
}