var mysql = require('./dbconnect.js');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

const PORT = 8124;

var app = express();
// setup engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended:true}));

// POST and GET requests
app.get('/home', function(req, res) {
	res.render('home', {title: 'Home Page'});
});




// listen on port
app.listen(PORT, function() {
	console.log("listening on Port " + PORT + 
		'; Enter Control-C to Exit')
})


