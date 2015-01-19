var express = require('express');
var router = express.Router();
var request = require('request');
var triplesec = require('triplesec');

router.post('/login/:email_or_username/password/:password', function(req, res, next){
	var email_or_username = req.params.email_or_username;
	var url = 'https://keybase.io/_/api/1.0/getsalt.json?email_or_username=' +
				email_or_username;
	request({url:url, json:true}, function(err, res, body){
		var salt = body.salt;
		var login_session = body.login_session;
		//var url = 'https://keybase.io/_/api/1.0/login.json' + 
		triplesec.encrypt ({
		    data: new triplesec.Buffer('hello andy'),
		    key: new triplesec.Buffer('test'),
		    progress_hook: function (obj) { /* ... */ }
		}, function(err, buff) {
		    if (! err) {
		        var ciphertext = buff.toString('hex');
		    	console.log(ciphertext);
		    } else {console.log(err);}
		});
	});
	next();
}, function(req, res, next){

});

module.exports = router;