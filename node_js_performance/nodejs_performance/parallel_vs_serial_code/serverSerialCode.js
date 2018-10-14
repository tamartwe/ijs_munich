
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personController = require('./person/personController');
const petController = require('./pet/petController');
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/ijsPerformanceLecture');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


var router = express.Router();

router.get('/', async (req, res) => {
  const person1 = await personController.createPerson();
  const person2 = await personController.createPerson();
  const person3 = await personController.createPerson();
  const person4 = await personController.createPerson();
  const pet1 = await petController.createPet();
  const pet2 = await petController.createPet();
  const pet3 = await petController.createPet();
  const pet4 = await petController.createPet();
  return res.json({
    person1, person2, person3, person4,
    pet1, pet2, pet3, pet4
  });
});


app.use('/api', router);

// Start the server
app.listen(port);
console.log('server is up ' + port);