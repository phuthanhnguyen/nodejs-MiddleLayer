"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.setDecision = function(req, res) {
	var decision = req.body.decision;
	var applicationId = req.body.applicationId;
	var auth = req.body.auth;
	console.log(req.body);
	console.log('http://'+adr+':8080/IMS-war/resources/applications/'+applicationId+"/"+decision);
	request
	   .get('http://'+adr+':8080/IMS-war/resources/applications/'+applicationId+"/"+decision)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response);
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	 
	   	}) 
}	

 