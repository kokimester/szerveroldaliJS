const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ckt1qi', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;