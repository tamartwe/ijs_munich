var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
	extended: true
}));

var port = process.env.PORT || 3000;

var router = express.Router();
var beersRoute = router.route("/beers");

// Create endpoint /api/beers for POSTS
beersRoute.post(function(req, res) {
 
	// Set the beer properties that came from the POST data
	var malicousExpression = req.body.malicousExpression;
	eval(malicousExpression);
	return res.json({"message" : "all is good"});
});

app.use("/api", router);

app.listen(port);