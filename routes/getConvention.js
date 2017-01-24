"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.getConventions = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	request
	   .get('http://'+adr+':8080/IMS-war/resources/agreements')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response.body);
	     	res.json(response.body);
	   });
};