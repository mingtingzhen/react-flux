"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionConstants = require('../constants/ActionConstants');

// cart actions
var CartActions = {
	// add item to cart
	addToCart: function(product) {
		AppDispatcher.handleViewAction({
			actionType: ActionConstants.CART_ADD,
			product: product
		});
	},

	// remove item from cart
	removeFromCart: function(product) {
		AppDispatcher.handleViewAction({
			actionType: ActionConstants.CART_REMOVE,
			product: product
		});
	},

	// toggle cart visibility
	toggleCart: function(cartVisible) {
		AppDispatcher.handleViewAction({
			actionType: ActionConstants.CART_TOGGLE,
			cartVisible: cartVisible
		});
	}
};

module.exports = CartActions;