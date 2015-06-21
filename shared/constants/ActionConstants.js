"use strict";

var keyMirror = require('react/lib/keyMirror');

var Actions = keyMirror({
	// product related actions
	PRODUCT_SELECT: null,			// select a product option
	PRODUCT_LOAD: null,				// bootstrap product data loaded

	// cart related actions
	CART_ADD: null,					// add item to cart
	CART_REMOVE: null,				// remove item from cart
	CART_TOGGLE: null				// shows or hides the cart
});

module.exports = Actions;