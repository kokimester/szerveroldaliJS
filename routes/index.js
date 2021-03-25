const renderMW = require('../middleware/renderMW');

module.exports = function(app) {
    const objRepo = {};

    app.get('/',
        renderMW(objRepo,'index'));
    app.use('/profil',
        renderMW(objRepo,'profil'));
    app.use('/hirdetes',
        renderMW(objRepo,'hirdeteseim'));
    app.use('/login',
        renderMW(objRepo,'login'));
    app.use('/register',
        renderMW(objRepo,'regisztracio'));
    app.use('/newpassword',
        renderMW(objRepo,'elfelejtett'));
};