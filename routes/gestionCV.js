"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.deleteCV = function(req, res) {
	var auth = req.body.auth;
	var cvId = req.body.cvId;
	console.log(req.body);
	request
	   .delete('http://'+adr+':8080/IMS-war/resources/cvs/'+cvId)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		console.log(response);
	   		if (response != undefined){
	   			console.log(response.status);
	   			res.json(response.status);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}


exports.getCVs = function(req, res) {
	var auth = req.body.auth;
	console.log(req.body);
	request
	   .get('http://'+adr+':8080/IMS-war/resources/cvs')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

exports.renameCV = function(req,res){
	var auth = req.body.auth;
	var cvId = req.body.cvId;
	var cvName = req.body.cvName;
	console.log(req.body);

	request
	   .put('http://'+adr+':8080/IMS-war/resources/cvs/'+cvId+'?name='+cvName)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			res.json(response.status);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}
