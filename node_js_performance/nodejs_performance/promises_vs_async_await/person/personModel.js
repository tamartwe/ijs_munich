var mongoose = require('mongoose');

var PersonSchema   = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Person', PersonSchema);