var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const child_process = require('child_process');

var  Person =  require('./models/persons.js');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect('mongodb://localhost:27017/securityDemo');


var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
  child_process.exec(
    'gzip ' + req.query.file_path,
    function (err, data) {
      console.log('err: ', err)
      console.log('data: ', data);
    });
  res.send('Zip Done')
})

app.listen(port);