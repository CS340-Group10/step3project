var mysql = require('./dbconnect.js');
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
// var handlebars = require('express-handlebars');

//const PORT = 8124;

var app = express();
// setup engine
app.engine('handlebars', handlebars.engine);
/************************************************/
/*
app.engine('handlebars', handlebars({
	defaultLayout: 'main',
	extname: '.handlebars',
	layoutsDir: __dirname + '/views/layouts/'
}));
*/
//app.set('views', path.join(__dirname, '/views/'));
/*************************************************/
app.set('view engine', 'handlebars');
app.set('port', 8124);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json)

// POST and GET requests
app.get('/home', function(req, res) {
	res.render('home', {title: 'Home Page'});
});




// listen on port
app.listen(app.get('port'), function() {
	console.log('listening on Port 8124; Enter Control-C to Exit');
})


