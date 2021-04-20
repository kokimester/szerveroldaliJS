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
const generateNewPwMW = require('../middleware/user/generateNewPwMW');
const saveChangedPwMW = require('../middleware/user/saveChangedPwMW');
const logoutMW = require('../middleware/auth/logoutMW');
const getUserByIDMW = require('../middleware/user/getUserByIDMW');

const UserModel = require('../models/user');
const HirdetesModel = require('../models/hirdetes');


module.exports = function(app) {
    const objRepo = {
        UserModel: UserModel,
        HirdetesModel: HirdetesModel
    };

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
        delHirdetesMW(objRepo));

    app.get('/profil',
        authMW(objRepo),
        getUserMW(objRepo),
        renderMW(objRepo,'profil')
    );

    app.get('/profil/:userid',
        getUserByIDMW(objRepo),
        getUserHirdetesekIfNotSelfMW(objRepo),
        renderMW(objRepo,'masikprofil'));

    app.use('/profil/:userid/edit',
        authMW(objRepo),
        getUserMW(objRepo),
        saveUserMW(objRepo),
        saveChangedPwMW(objRepo),
        renderMW(objRepo,'profiledit'));

    app.use('/login',
        getUserByEmailMW(objRepo),
        checkUserLoginMW(objRepo),
        renderMW(objRepo,'login'));

    app.use('/logout',
        authMW(objRepo),
        logoutMW(objRepo)
        );

    app.use('/register',
        getUserByEmailMW(objRepo),
        createUserMW(objRepo),
        renderMW(objRepo,'regisztracio'));

    app.use('/newpassword',
        getUserByEmailMW(objRepo),
        generateNewPwMW(objRepo),
        saveNewPwMW(objRepo),
        sendNewPwMW(objRepo),
        renderMW(objRepo,'elfelejtett'));

};