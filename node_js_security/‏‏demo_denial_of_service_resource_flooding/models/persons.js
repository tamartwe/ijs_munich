'use strict';

var mongoose = require('mongoose');

var personSchema  = mongoose.Schema({
    name: {type: String},
    lastName: {type: String},
    address: {type: String}
});

module.exports = mongoose.model('Person', personSchema);