// lekerdezi egy user hirdeteseit, abban az esetben, ha ez nem onmaga

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {
    
    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    return function(req, res, next) {
        console.log('----------- getUserHirdetesekIfNotSelfMW: -----------');
       
        if(res.locals.user._id === 'koki')
        {
            console.log('/////////uh oh, checking your own profile/////////');
            return next();
        }
        res.locals.hirdetesek = "";

        console.log(res.locals)

        next();
    }
}