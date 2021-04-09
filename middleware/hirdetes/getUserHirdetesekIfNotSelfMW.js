// lekerdezi egy user hirdeteseit, abban az esetben, ha ez nem onmaga

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('----------- getUserHirdetesekIfNotSelfMW: -----------');
       
        if(res.locals.user._id === 'koki')
        {
            console.log('/////////uh oh, checking your own profile/////////');
            return next();
        }
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
            felado: 'Minta Bela',
            _feladoid: '323'
        }];
        console.log(res.locals)

        next();
    }
}