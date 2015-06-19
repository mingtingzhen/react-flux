"use strict";

var Sequelize = require("sequelize");

module.exports = {
	model: {
		id: Sequelize.INTEGER
	},
	options: {
		classMethods: {
			getProducts: function(page) {
				return this.findAll({
					offset: this.limit * page + 1,
					limit: this.limit
				});
			}
		},
		limit: 10
	},
	relations: {

	}
};