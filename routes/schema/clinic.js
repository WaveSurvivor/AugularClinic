const { model, modelNames } = require('mongoose');
var mongoose = require('../connect');
var clinicSchema = new mongoose.Schema ({
    name: String,
    tel: String,
    tax: String,
    address: String
},{ collection: 'clinic' });

module.exports = clinicSchema;