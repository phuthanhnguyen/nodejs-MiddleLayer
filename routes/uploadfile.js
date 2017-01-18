"use strict";
var request = require('superagent');
var multer = require('multer');

exports.uploadfile = function(req, res) {
	console.log('upload file...');

	var DIR = __dirname + '/../uploads/';

	console.log(DIR);
	var upload = multer({
		dest: DIR,
		rename: function (fieldname, filename) {
		    return filename + Date.now();
		},
		onFileUploadStart: function (file) {
		    console.log(file.originalname + ' is starting ...');
		},
		onFileUploadComplete: function (file) {
		    console.log(file.fieldname + ' uploaded to  ' + file.path);
		}
	});

	upload(req, res, function (err) {
		console.log("upload phase");
	    if (err) {
	    	console.log(err);
	      return res.end(err.toString());
	    }
	    
	    res.end('File is uploaded');
	});	
};