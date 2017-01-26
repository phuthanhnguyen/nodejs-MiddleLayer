"use strict";
var request = require('superagent');
var adr = require('./addressIP').adr();

exports.getoffers = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	request
	   .get('http://'+adr+':8080/IMS-war/resources/hello/offers')
	   //.get('http://'+adr+':8080/IMS-war/resources/hello/offers')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	     	res.json(response.body);
	   });
};

exports.filter = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	var filterContent = JSON.parse(req.body.filterContent);
	console.log(filterContent);

	//post
	request
	   .post('http://'+adr+':8080/IMS-war/resources/hello/finaloffers')
	   //.post('http://10.32.3.74:8080/IMS-war/resources/hello/finaloffers')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .send(filterContent)
	   .end(function(err, response){
	   		if (response != undefined){
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
};

exports.applyOffer = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	var studentId = req.body.studentId;
	console.log(studentId);
	var json = JSON.stringify({'studentId': studentId});
	//post
	request
	   .post('http://'+adr+':8080/IMS-war/resources/hello/finaloffers')
	   //.post('http://10.32.3.74:8080/IMS-war/resources/hello/finaloffers')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		if (response != undefined){
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

exports.appliedOffer = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);

/*	var resp = {
		"offers":"[{\"ido\":19,\"enterprise\":\"Sogeti_France\",\"dateCreation\":\"janv. 11, 2017\",\"dateBeginning\":\"mars 1, 2017\",\"length\":120,\"activityField\":\"Informatique\",\"title\":\"STAGE INGÃ‰NIEUR BI H/F\",\"areaCode\":31,\"location\":\"Blagnac\",\"missionStatement\":\"\\u003cp\\u003e Osez ! Rejoignez une entreprise ambitieuse pour personnalitÃ©s crÃ©atives. \\u003cbr /\\u003e Sogeti France (filiale du groupe Capgemini) est une entreprise de services du numÃ©rique.\\u003cbr /\\u003e Nous accompagnons la transformation des entreprises dans 4 domaines : Digital, Testing, SÃ©curitÃ© et Infrastructure.\\u003cbr /\\u003e Aujourd\\u0026#039;hui notre entreprise figure parmi les 15 meilleurs employeurs du secteur high-tech en France.\\u003cbr /\\u003e \\u003cbr /\\u003e Sous la responsabilitÃ© d\\u0026#039;un chef de projet, votre mission sera :\\u003cbr /\\u003e -le recueil et la rÃ©daction des spÃ©cifications fonctionnelles et techniques\\u003cbr /\\u003e -la conception et le dÃ©veloppement des applications dans l\\u0026#039;environnement technique de la Business Intelligence (ETL : Informatica, DataStage et outils BI : Business Object, Qlickview etc.)\\u003cbr /\\u003e -l\\u0026#039;utilisation des bases de donnÃ©es\\u003cbr /\\u003e -l\\u0026#039;exÃ©cution des tests, de la recette, de l\\u0026#039;intÃ©gration et de la mise en production des bases de donnÃ©es\\u003cbr /\\u003e -la maintenance corrective et Ã©volutive des outils\\u003cbr /\\u003e -l\\u0026#039;import et l\\u0026#039;export des donnÃ©es sous Excel et le suivi de la base de donnÃ©es\\u003cbr /\\u003e \\u003cbr /\\u003e RÃ©munÃ©ration de stage: De 2500 Ã  3333 EUR par mois \\u003c/p\\u003e\",\"pay\":2500,\"details\":\"\",\"profile\":\"\\u003cp\\u003e PassionnÃ©(e) d\\u0026#039;informatique, vous suivez actuellement une formation d\\u0026#039;ingÃ©nieur en Master 2 Ã  l\\u0026#039;UniversitÃ© ou en Ecole d\\u0026#039;ingÃ©nieur et vous possÃ©dez une premiÃ¨re expÃ©rience en dÃ©veloppement BI. Les projets sont rÃ©alisÃ©s dans un contexte Agile, la rÃ©ussite de cette mission nÃ©cessitera donc une certaine aisance relationnelle ainsi que de bonnes aptitudes en matiÃ¨re de communication orale et Ã©crite. \\u003cbr /\\u003e \\u003cbr /\\u003e Vous Ãªtes disponible pour un stage de fin d\\u0026#039;Ã©tude, d\\u0026#039;une durÃ©e de 6 mois Ã  temps complet.\\u003cbr /\\u003e \\u003cbr /\\u003e Vous Ãªtes dotÃ©(e) d\\u0026#039;une personnalitÃ© ambitieuse et crÃ©ative ?\\u003cbr /\\u003e Vous aimez les challenges ?\\u003cbr /\\u003e Vous avez l\\u0026#039;esprit d\\u0026#039;Ã©quipe ? \\u003cbr /\\u003e \\u003cbr /\\u003e Alors, REJOIGNEZ-NOUS !\\u003cbr /\\u003e \\u003cbr /\\u003e Retrouvez-nous sur https://www.facebook.com/#!/MeetSogetiFrance\\u003cbr /\\u003e Et sur http://www.viadeo.com/groups/?containerId\\u003d00217tw5f9n70tpy\\u003cbr /\\u003e \\u003cbr /\\u003e Sogeti est signataire de la charte de la diversitÃ© en entreprise.\\u003cbr /\\u003e \\u003cbr /\\u003e Du 8 juin au 31 dÃ©cembre 2016, Sogeti s\\u0026#039;associe Ã  Uber pour offrir Ã  ses candidats un service personnalisÃ© leur permettant de se rendre Ã  leurs entretiens de recrutement dans les meilleures conditions ! \\u003cbr /\\u003e Informations et conditions sur : fr.sogeti.com/uber4sogeti\\u003cbr /\\u003e \\u003c/p\\u003e\",\"contactInformations\":\"\\u003cp\\u003ePar Internet : http://sogeti-fra.contactrh.com/jobs/25/16148668\\u003c/p\\u003e \\u003cp\\u003eContact : Service recrutement\\u003c/p\\u003e\"}]",
		"applications":"[{\"id\":3,\"idStudent\":2,\"idPartner\":8,\"namePartner\":\"Sogeti_France\",\"idCoordinator\":5,\"idOffer\":19,\"state\":\"WAITING_PARTNER\",\"coverLetter\":\"\",\"idCv\":-1}]"
	};*/

	//res.json(resp);
	//post
	request
	   .get('http://'+adr+':8080/IMS-war/resources/hello/applicationsandoffers')
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

exports.partnerOffers = function(req, res) {
	var auth = req.body.auth;
	console.log(auth);
	var company = req.body.company;
	console.log(company);

	//post
	request
	   .get('http://'+adr+':8080/IMS-war/resources/hello/offersbypartner?name='+company)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}

//get offer object from applications id
exports.getOfferFromApp = function(req, res) {
	var auth = req.body.auth;
	var offerId = req.body.offerId;
	var partnerName = req.body.partnerName;
	console.log(req.body);
	console.log('http://'+adr+':8080/IMS-war/resources/hello/ofoi?oid='+offerId+'&pname='+partnerName);
	//post
	request
	   .get('http://'+adr+':8080/IMS-war/resources/hello/ofoi?oid='+offerId+'&pname='+partnerName)
	   .set('Authorization', "Basic "+auth)
	   .set('Accept', 'application/json')
	   .end(function(err, response){
	   		if (response != undefined){
	   			console.log(response.body);
	   			res.json(response.body);
	   		} else {
	   			res.json({});
	   		}	   
	   	});
}


