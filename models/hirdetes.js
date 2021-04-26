const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Hirdetes = db.model('Hirdetes',{
    szoveg: String,
    tipus: String,
    ar: String,
    kepek: [{
        type: String
    }],
    _felado: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = Hirdetes;