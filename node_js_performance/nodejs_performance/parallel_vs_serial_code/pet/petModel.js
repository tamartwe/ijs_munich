var mongoose = require('mongoose');

var PetSchema   = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Pet', PetSchema);