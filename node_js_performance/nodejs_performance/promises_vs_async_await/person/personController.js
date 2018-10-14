
var Person = require('./personModel');

exports.postPerson = async () => {

  var person = new Person();

  person.name = 'Tamar';
 
  await person.save();

  return person;
};