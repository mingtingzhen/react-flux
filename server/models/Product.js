"use strict";

var Sequelize = require("sequelize");

module.exports = {
	model: {
		id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}
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
