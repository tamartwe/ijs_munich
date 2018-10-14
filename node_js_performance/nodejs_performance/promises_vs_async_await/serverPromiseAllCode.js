
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
  Promise.all([personController.postPerson(),
  personController.postPerson(), personController.postPerson(),
  personController.postPerson(), petController.postPet(),
  petController.postPet(), petController.postPet(),
  petController.postPet()]).then((values) => {
    return res.json({
      values
    });
  });
});


app.use('/api', router);

// Start the server
app.listen(port);
console.log('server is up ' + port);