"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher'),
	ActionConstants = require('../constants/ActionConstants');

// product actions
var ProductActions = {
	// products loaded
	loadProduct: function(products) {
		AppDispatcher.handleViewAction({
			actionType: ActionConstants.PRODUCT_LOAD,
			products: products
		});
	},

	// select product
	selectProduct: function(index) {
		AppDispatcher.handleViewAction({
			actionType: ActionConstants.PRODUCT_SELECT,
			productIndex: index
		});
	}
};

module.exports = ProductActions;