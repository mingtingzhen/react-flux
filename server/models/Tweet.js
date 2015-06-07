"use strict";

var Sequelize = require("sequelize");

module.exports = {
	model: {
		id: Sequelize.INTEGER,
		twid: Sequelize.STRING,
		active: Sequelize.BOOLEAN,
		author: Sequelize.STRING,
		avatar: Sequelize.STRING,
		body: Sequelize.STRING,
		date: Sequelize.DATE,
		screenname: Sequelize.STRING
	},
	options: {
		classMethods: {
			getTweets: function(page) {
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