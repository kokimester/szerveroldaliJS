// feltolti a kepeket, kezeli a hibat ha van

const multer  = require('multer');
const upload = multer({ dest: 'uploads/'}).array('pictures', 5);

var requireOption = require('../common').requireOption;

module.exports = function (objectrepository) {

    const HirdetesModel = requireOption(objectrepository, 'HirdetesModel');

    //return function(req, res, next) {
    //    console.log('-----------uploadPicturesMW:-----------');  
    //    upload.array('pictures',5);
    //}
    return function uploadFile(req, res, next) {
        
    
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                console.log('A Multer error occurred when uploading. Possibly too much photos given to upload.');
            } else if (err) {
                console.log('An unknown error occurred when uploading.');
                // An unknown error occurred when uploading.
            }
            console.log('Everything went fine. ');
            // Everything went fine. 
            return next();
        })
    }
}