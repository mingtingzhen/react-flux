"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events').EventEmitter,
	ActionConstants = require('../constants/ActionConstants'),
	_ = require('underscore');

// private data member
var _products = [], _selected = null;

// private methods
function _loadProductData(data) {
	_products = data;
	_selected = data[0];
}

function _setSelected(productIndex) {
	_selected = _products[productIndex];
}

// define ProductStore class
var ProductStore = _.extend({}, EventEmitter.prototype, {
	getProducts: function() {
		return _products;
	},

	getSelected: function() {
		return _selected;
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.off('change', callback);
	}
});

// register callback with AppDispatcher
AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		case ActionConstants.PRODUCT_LOAD:
			_loadProductData(action.products);
			break;
		case ActionConstants.PRODUCT_SELECT:
			_setSelected(action.productIndex);
			break;
		default:
			return;
	}

	// if action was responded to, emit change event
	ProductStore.emitChange();
});

// finally export module
module.exports = ProductStore;