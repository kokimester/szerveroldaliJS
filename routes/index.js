const renderMW = require('../middleware/renderMW');

module.exports = function(app) {
    const objRepo = {};

    app.get('/',
        renderMW(objRepo,'index'));
    app.use('/profil',
        renderMW(objRepo,'profil'));
    app.use('/hirdetes',
        renderMW(objRepo,'hirdeteseim'));
};