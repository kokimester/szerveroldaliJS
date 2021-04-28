// general egy random jelszot a felhasznalonak amivel belephet
var requireOption = require('../common').requireOption;
const crypto = require('crypto');

module.exports = function (objectrepository) {
    return function(req, res, next) {

        
        console.log('-----------generateNewPwMW:-----------');

        if(typeof res.locals.user === 'undefined')
        {
            return next();
        }

        const generatePassword = (
            length = 20,
            wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
          ) =>
            Array.from(crypto.randomFillSync(new Uint32Array(length)))
              .map((x) => wishlist[x % wishlist.length])
              .join('')
          



        res.locals.newPassword = generatePassword();

        return next();
    }
}