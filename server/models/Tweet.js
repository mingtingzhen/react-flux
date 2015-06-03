"use strict";

var Sequelize = require("sequelize");

module.exports = {
	model: {
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
			getTweets: function(page, skip, callBack) {
				console.log(page, skip, callBack);
			}
		}
	},
	relations: {

	}
};