const renderMW = require('../middleware/renderMW');
const checkUserLoginMW = require('../middleware/auth/checkUserLoginMW');
const authMW = require('../middleware/auth/authMW');
const getHirdetesekMW = require('../middleware/hirdetes/getHirdetesekMW');
const getHirdetesMW = require('../middleware/hirdetes/getHirdetesMW');
const saveHirdetesMW = require('../middleware/hirdetes/saveHirdetesMW');
const getUserHirdetesekMW = require('../middleware/hirdetes/getUserHirdetesekMW');
const getUserHirdetesekIfNotSelfMW = require('../middleware/hirdetes/getUserHirdetesekIfNotSelfMW');
const delHirdetesMW = require('../middleware/hirdetes/delHirdetesMW');
const createUserMW = require('../middleware/user/createUserMW');
const getUserByEmailMW = require('../middleware/user/getUserByEmailMW');
const getUserMW = require('../middleware/user/getUserMW');
const saveUserMW = require('../middleware/user/saveUserMW');
const sendNewPwMW = require('../middleware/user/sendNewPwMW');
const saveNewPwMW = require('../middleware/user/saveNewPwMW');



module.exports = function(app) {
    const objRepo = {};

    app.get('/',
        getHirdetesekMW(objRepo),
        renderMW(objRepo,'index'));

    app.get('/hirdetes',
        authMW(objRepo),
        getUserMW(objRepo),
        getUserHirdetesekMW(objRepo),
        renderMW(objRepo,'hirdeteseim'));

    app.use('/hirdetes/new',
        authMW(objRepo),
        getUserMW(objRepo),
        saveHirdetesMW(objRepo),
        renderMW(objRepo,'hirdeteseditnew'));

    app.get('/hirdetes/get/:hirdetesid',
        authMW(objRepo),
        getUserMW(objRepo),
        getHirdetesMW(objRepo),
        renderMW(objRepo,'hirdetes'));

    app.use('/hirdetes/edit/:hirdetesid',
        authMW(objRepo),
        getUserMW(objRepo),
        getHirdetesMW(objRepo),
        saveHirdetesMW(objRepo),
        renderMW(objRepo,'hirdeteseditnew'));

    app.use('/hirdetes/del/:hirdetesid',
        authMW(objRepo),
        getHirdetesMW(objRepo),
        delHirdetesMW(objRepo),
        );
    
    app.get('/profil/:userid',
        authMW(objRepo),
        getUserMW(objRepo),
        getUserHirdetesekIfNotSelfMW(objRepo),
        renderMW(objRepo,'profil'));

    app.use('/profil/:userid/edit',
        authMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        saveNewPwMW(objRepo),
        renderMW(objRepo,'profiledit'));

    app.use('/login',
        getUserByEmailMW(objRepo),
        checkUserLoginMW(objRepo),
        renderMW(objRepo,'login'));

    app.use('/register',
        createUserMW(objRepo),
        saveUserMW(objRepo),
        renderMW(objRepo,'regisztracio'));

    app.use('/newpassword',
        getUserByEmailMW(objRepo),
        sendNewPwMW(objRepo),
        saveNewPwMW(objRepo),
        renderMW(objRepo,'elfelejtett'));

};