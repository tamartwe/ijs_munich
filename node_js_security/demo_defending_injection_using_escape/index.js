var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var  User =  require('./models/users.js');
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect('mongodb://localhost:27017/injectioDemo');


var port = process.env.PORT || 3000;


//Signup API
app.post('/signup', function (req, res) {

  var newUser = new User(req.body);
  newUser.save(function(err,data){
    if(err){
        res.send(err);
    }else{
        res.send('User Registered');
    }
  })
});

//Login API
app.post('/login',function(req,res){
    const escapedEmail = escape(req.body.email);
    const escapedPassword = escape(req.body.password);
    User.findOne({'email':escapedEmail,'password':escapedPassword},function(err,data){
        if(err){
            res.send(err);
        }else if(data){
            res.send('User Login Successful');
        }else {
            res.send('Wrong Username Password Combination');
        }
    })
});

app.listen(port);

















