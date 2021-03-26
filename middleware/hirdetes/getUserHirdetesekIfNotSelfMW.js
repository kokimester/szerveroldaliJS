// lekerdezi egy user hirdeteseit, abban az esetben, ha ez nem onmaga

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('getting given user\'s hirdetesek: ' + JSON.stringify(res.locals));
        res.locals.hirdetesek = [{
            _id: '123',
            szoveg:'Elado T-65 X-Wing minden tartozekaval',
            tipus: 'T-65 X-Wing',
            hirdetestipus: 'Elad'
        },
        {
            _id: '345',
            szoveg:'Elado T-70 X-Wing minden tartozekaval',
            tipus: 'T-70 X-Wing',
            hirdetestipus: 'Keres'
        }];
        console.log(JSON.stringify(res.locals))

        next();
    }
}