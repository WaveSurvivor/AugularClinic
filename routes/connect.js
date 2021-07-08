var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Node_clinic');

module.exports = mongoose;