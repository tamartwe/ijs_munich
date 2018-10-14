
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/ijsSecurityLecture');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


var router = express.Router();

router.get('/', async (req, res) => {
 
});


app.use('/api', router);

// Start the server
app.listen(port);
console.log('server is up ' + port);