// feltolti a kepeket, kezeli a hibat ha van

const multer  = require('multer');
const upload = multer({ dest: 'uploads/'}).array('pictures', 5);

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');
    return function uploadFile(req, res, next) {
        
    
        if(res.locals.hirdetes.kepek.length >= 5)
        {
            res.locals.error = "Maximum 5 képet tudsz feltölteni!";
            return next();
        }
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                console.log('A Multer error occurred when uploading. Too much photos given to upload.');
                res.locals.error = "Maximum 5 képet tudsz feltölteni!";
                return next();
            } else if (err) {
                console.log('An unknown error occurred when uploading.');
                // An unknown error occurred when uploading.
                return next();
            }
            console.log('No upload error occured');
            // Everything went fine. 
            return next();
        })
    }
}