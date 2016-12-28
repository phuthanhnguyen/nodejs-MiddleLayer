"use strict";

exports.getoffers = function(req, res) {
	var auth = req.body.auth;
	request
	   .get('http://localhost:/')
	   .set('Authorized', auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	     res.json(response);
	   });
};