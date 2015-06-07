"use strict";
var React = require('react');
var ORM = require('./models');

var router = function(app) {
	var Tweet = ORM.model('Tweet');

	app.get('/', function(req, res) {
		var App = require('../shared/components/App.jsx');

		Tweet.getTweets(0).then(function(data) {
			var initialState = data;
			var markup = React.renderToString(<App state={initialState}/>);

			res.render('index', {
				markup: markup,
				state: JSON.stringify(initialState)
			});
		});
	});
};

module.exports = router;
