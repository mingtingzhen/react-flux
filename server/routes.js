"use strict";
var React = require('react');
require('node-jsx').install();

var router = function(app) {
	app.get('/', function(req, res) {
		var App = require('../shared/components/App.react.jsx');
		var markup = React.renderToStaticMarkup(React.createElement(App));
		// todo - get initial state from backend service
		var initialState = [1, 2, 3];

	    res.render('index', {
	        markup: markup,
	        state: JSON.stringify(initialState)
	    });
	});
};

module.exports = router;