var mongoose = require('../connect');

var customerSchema = new mongoose.Schema ({
    code: String,
    name: String,
    email: String,
    tel: String,
    lineid: String,
    address: String
},{ collection: 'customer' });

module.exports = customerSchema;