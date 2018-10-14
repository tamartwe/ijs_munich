
var Person = require('./personModel');

exports.createPerson = async () => {

  var person = new Person();

  person.name = 'Tamar';
 
  await person.save();

  return person;
};