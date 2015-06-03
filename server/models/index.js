"use strict";

var filesystem = require('fs');
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
var _ = require('underscore');

var db = function() {
	var sequelize = null,
		models = {},
		relationships = {};

	this.setup = function() {
		var dbName = config.database,
			username = config.username || null,
			password = config.password || null,
			options = config.options;

		sequelize = new Sequelize(dbName, username, password, options);

		init();

		console.log(models, relationships);
	};

	this.model = function(name) {
		return models[name];
	};

	this.Seq = function() {
		return Sequelize;
	};

	function init(){
		filesystem
			.readdirSync(__dirname)
			.filter(function(file) {
				return (file.indexOf(".") !== 0 && file !== "index.js");
			})
			.forEach(function(name) {
				var object = require(__dirname + "/" + name);
				var options = object.options || {};
				var modelName = name.replace(/\.js$/i, "");
				// define model
				models[modelName] = sequelize.define(modelName, object.model, options);
				// add in relations
				if ("relations" in object){
					relationships[modelName] = object.relations;
				}
			});

			// build relations
			_.each(relationships, function(relation, name) {
				_.each(relation, function(related, relName) {
					models[name][relName](models[related]);
				});
			});
	}
};

db.instance = null;

db.getInstance = function() {
	if (this.instance === null){
		this.instance = new db();
	}
	return this.instance;
};

module.exports = db.getInstance();