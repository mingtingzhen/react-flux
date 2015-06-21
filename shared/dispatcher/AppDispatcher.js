"use strict";

var Dispatcher = require('flux').Dispatcher;

// create Dispatcher instance for the app
var AppDispatcher = new Dispatcher();

// hanlder for dispatch requests from View
AppDispatcher.handleViewAction = function(action) {
	// view actions
	this.dispatch({
		source: "VIEW_ACTION",
		action: action
	});
};

// hanlder for dispatch requests from api (or other backend changes)
AppDispatcher.handleAPIAction = function(action) {
	this.dispatch({
		source: "API_ACTION",
		action: action
	});
};

module.exports = AppDispatcher;