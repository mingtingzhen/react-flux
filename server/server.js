// Require our dependencies
var express = require('express'),
	exphbs = require('express-handlebars'),
	http = require('http'),
	path = require('path'),
	mongoose = require('mongoose'),
	routes = require('./routes'),
	config = require('./config');

// Create an express instance
var app = express();

// Set handlebars as the templating engine
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
	extname:'.hbs',
	layoutsDir: path.join(__dirname, 'views', 'layouts'),
	defaultLayout:'main'
}));
app.set('view engine', 'hbs');

// Disable etag headers on responses
app.disable('etag');

// Connect to our mongo database
//mongoose.connect('mongodb://localhost/react-proj');

// init routes
require('./routes')(app);

// Set /dist as our static content dir
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));

// Start our server
app.set('port', (process.env.PORT || 8080));
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

