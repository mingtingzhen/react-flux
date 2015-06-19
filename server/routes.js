"use strict";
var React = require('react');
var ORM = require('./models');
var productData = require('./mocks/ProductData');

var router = function(app) {
	var Product = ORM.model('Product');

	app.get('/', function(req, res) {
		var App = require('../shared/components/App.jsx');

		Product.getProducts(0).then(function(data) {
			// force to use mock data
			data = productData;
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
