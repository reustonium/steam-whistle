var express = require('express');
var router = express.Router();
var request = require('request');
var scrypt = require('scrypt');
jsSHA = require("jssha");

router.post('/login/:email_or_username/password/:password', function(req, res, next){
	var email_or_username = req.params.email_or_username;
	var url = 'https://keybase.io/_/api/1.0/getsalt.json?email_or_username=' +
				email_or_username;
	request({url:url, json:true}, function(err, res, body){
		var salt = body.salt;
		var login_session = body.login_session;
		var pwh = scrypt(req.params.password, hex2bin(salt), N=215, r=8, p=1, dkLen=224)[192:224]
		var hmac_pwh = 
		var url = 'https://keybase.io/_/api/1.0/login.json' +

	});
	next();
}, function(req, res, next){

});

module.exports = router;