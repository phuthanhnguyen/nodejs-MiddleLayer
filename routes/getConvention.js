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

exports.conventionDecision = function(req,res){
	var auth = req.body.auth;
	var conventionId = req.body.conventionId;
    var decision =  req.body.decision;
	console.log(req.body);
	var url;
	if (decision === 'accept')
		url = 'http://'+adr+':8080/IMS-war/resources/agreements/'+conventionId+'?accept=true';
	else url = url = 'http://'+adr+':8080/IMS-war/resources/agreements/'+conventionId+'?accept=false';
	request
	   .put(url)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response.body);
	     	res.json(response.body);
	   });
}