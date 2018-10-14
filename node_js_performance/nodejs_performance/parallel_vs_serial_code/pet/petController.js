
var Pet = require('./petModel');

exports.createPet = async (req) => {

  var pet = new Pet();

  pet.name = 'Dog';
 
  await pet.save();

  return pet;
};