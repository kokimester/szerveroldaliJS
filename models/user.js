const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Hirdetes = db.model('Hirdetes',{
    name: String,
    phone: String,
    email: String,
    password: String,
});

module.exports = Hirdetes;