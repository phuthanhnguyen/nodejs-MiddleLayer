"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.getCandidates = function(req, res) {
	var offerId = req.body.offerId;
	console.log(req.body);

	request
	   .get('http://'+adr+':8080/AMS/resources/applications/offers/'+offerId+'/students')
	   //.set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response);
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

exports.getApplications = function(req,res){
	var offerId = req.body.offerId;
	console.log(req.body);

	request
	   .get('http://'+adr+':8080/AMS/resources/applications/offers/'+offerId)
	   //.set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response);
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

exports.getApplicationsCC = function(req, res){
	var auth = req.body.auth;
	console.log(req.body);
	if (auth != undefined)
		request
		   .get('http://'+adr+':8080/IMS-war/resources/hello/applicationsandoffers')
		   .set('Authorization', "Basic "+auth)
		   .set('Accept', 'application/json')
		   .end(function(err, response){
		   		console.log(response.body);
		   		if (response != undefined){
		   			console.log(response.body.applications);
		   			res.json(JSON.parse(response.body.applications));
		   		} else {
		   			res.json({});
		   		}	   
		   	});
}

exports.getAppFromStudentId = function(req,res){
	var auth = req.body.auth;
	var studentId = req.body.studentId;
	console.log(req.body);
	if (auth != undefined)
		request
		   .get('http://'+adr+':8080/IMS-war/resources/hello/applicationsandoffers')
		   .set('Authorization', "Basic "+auth)
		   .set('Accept', 'application/json')
		   .end(function(err, response){
		   		console.log(response.body);
		   		if (response != undefined){
		   			console.log(response.body);
		   			res.json(JSON.parse(response.body.applications));
		   		} else {
		   			res.json({});
		   		}	   
		   	});
}

exports.getAppFromStudentID = function(req,res){
	var auth = req.body.auth;
	var studentId = req.body.studentId;
	var offerId = req.body.offerId;
	console.log(req.body);
	if (auth != undefined)
		request
		   .get('http://'+adr+':8080/IMS-war/resources/applications?idStudent='+studentId+'&idOffer='+offerId)
		   .set('Authorization', "Basic "+auth)
		   .set('Accept', 'application/json')
		   .end(function(err, response){
		   		console.log(response.body);
		   		if (response != undefined){
		   			console.log(response.body);
		   			res.json(response.body);
		   		} else {
		   			res.json({});
		   		}	   
		   	});
}