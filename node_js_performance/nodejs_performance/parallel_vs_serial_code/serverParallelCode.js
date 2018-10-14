
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personController = require('./person/personController');
const petController = require('./pet/petController');
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/ijsPerformanceLecture');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


var router = express.Router();

router.get('/', async (req, res) => {
  const [person1, person2, person3, person4, pet1, pet2, pet3, pet4] =
    await Promise.all([personController.createPerson(),
    personController.createPerson(), personController.createPerson(),
    personController.createPerson(), petController.createPet(),
    petController.createPet(), petController.createPet(), petController.createPet()]);
  return res.json({
    person1, person2, person3, person4,
    pet1, pet2, pet3, pet4
  });
});


app.use('/api', router);

// Start the server
app.listen(port);
console.log('server is up ' + port);