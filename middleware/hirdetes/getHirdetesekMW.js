// lekerdezi az osszes hirdetest az adatbazisbol
// ez a fooldalon van hasznalva, mert ott megjelenik az osszes hirdetes
// kesobbiekben limitalva lesz valoszinuleg 25 legkerdezesre, teljesitmenyszempontok miatt
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('-----------getHirdetesekMW:-----------')
        res.locals.hirdetesek = [{
            _id: '123',
            szoveg:'Elado T-65 X-Wing minden tartozekaval',
            tipus: 'T-65 X-Wing',
            hirdetestipus: 'Elad',
            price: '',
            felado:'Minta Bela',
            _feladoid: '323'
        },
        {
            _id: '345',
            szoveg:'Elado T-70 X-Wing minden tartozekaval',
            tipus: 'T-70 X-Wing',
            hirdetestipus: 'Keres',
            price: '',
            felado:'Minta Bela',
            _feladoid: '323'
        }];
        console.log(res.locals)
        next();
    }
}