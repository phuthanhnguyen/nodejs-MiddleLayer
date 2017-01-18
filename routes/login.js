"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.login = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	console.log(adr);
	request
	   //.get('http://10.32.3.74:8080/IMS-war/resources/hello/logintest')
	   .get('http://'+adr+':8080/IMS-war/resources/profile')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}
	   });
};
