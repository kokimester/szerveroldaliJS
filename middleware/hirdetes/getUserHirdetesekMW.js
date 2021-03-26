// lekerdezi egy user sajat hirdeteseit
var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    return function(req, res, next) {
        console.log('getting user\'s own hirdetesek');
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