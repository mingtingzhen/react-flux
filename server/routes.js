"use strict";

var router = function(app) {
	app.get('/', function(req, res) {
	    res.render('index', {
	        title: 'Skeleton react isophormic js app'
	    });
	});
};

module.exports = router;