"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events').EventEmitter,
	ActionConstants = require('../constants/ActionConstants'),
	_ = require('underscore');

// private data member
var _products = {}, _cartVisible = false;

// private methods
function _addProduct(product) {
	var sku = product.sku;
	if (_products[sku]) {
		_products[sku].quantity++;
	} else {
		_products[sku] = {
			name: product.name,
			type: product.type,
			price: product.price,
			quantity: 1,
			sku: sku
		};
	}
}

function _removeProduct(product) {
	delete _products[product.sku];
}

function _setCartVisibility(cartVisible) {
	_cartVisible = cartVisible;
}

// define CartStore class
var CartStore = _.extend({}, EventEmitter.prototype, {

	getCartProducts: function() {
		return _products;
	},

	getCartVisible: function() {
		return _cartVisible;
	},

	getCount: function() {
		var count = 0,
			keys = Object.keys(_products);
		_.each(keys, function(key) {
			count += _products[key].quantity;
		});

		return count;
	},

	getTotalCost: function() {
		var cost = 0,
			keys = Object.keys(_products);
		_.each(keys, function(key) {
			cost += _products[key].price * _products[key].quantity;
		});

		return cost.toFixed(2);
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
		case ActionConstants.CART_ADD:
			_addProduct(action.product);
			break;
		case ActionConstants.CART_REMOVE:
			_removeProduct(action.product);
			break;
		case ActionConstants.CART_TOGGLE:
			_setCartVisibility(action.cartVisible);
			break;
		default:
			return;
	}

	// if action was responded to, emit change event
	CartStore.emitChange();
});

// finally export module
module.exports = CartStore;