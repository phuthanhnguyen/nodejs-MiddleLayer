"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.apply = function(req, res) {
	var auth = req.body.auth;
	var offerId = req.body.offerId;
	var company = req.body.company;
	var message = req.body.message;
	var cvId = req.body.cvId;

	var json = JSON.stringify({
		'offerId': offerId,
		'partnerName': company,
		'coverLetter': message,
		'cvId': cvId	
	})
	console.log(json);

	request
	   .post('http://'+adr+':8080/IMS-war/resources/applications/create')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		res.json(response.body);
	   });
};