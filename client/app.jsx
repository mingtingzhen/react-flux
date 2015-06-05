/** @jsx React.DOM */
"use strict";

require('./app.scss');

var React = require('react');
var App = require('../shared/components/App.jsx');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
React.render(
	<App models={initialState} />,
	document.getElementById('react-app')
);
