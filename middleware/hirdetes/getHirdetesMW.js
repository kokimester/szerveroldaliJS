// lekerdezi a megadott ID-ju hirdetest az adatbazisbol.
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('getting hirdetes from db');
        res.locals.hirdetes = {
            _id: '123',
            szoveg:'Elado T-65 X-Wing minden tartozekaval',
            tipus: 'T-65 X-Wing',
            hirdetestipus: 'Elad',
            price: '12.345,-',
            felado:'Fejes Daniel',
            _feladoid: 'koki'
        };
        console.log(res.locals.hirdetes);
        next();
    }
}