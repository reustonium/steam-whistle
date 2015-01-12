var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: 'Mandrill',
	auth: {
		user: secrets.mandrill.user,
		pass: secrets.mandrill.password
	}
});
/**
* GET /index
* Landing Page.
*/
exports.index = function(req, res) {
	res.render('index', {
		title: 'Welcome to Steam Whistle'
	});
};
/**
* POST /contact
* Send a contact form via Nodemailer.
*/
exports.postContact = function(req, res) {
	req.assert('name', 'Name cannot be blank').notEmpty();
	req.assert('email', 'Email is not valid').isEmail();
	req.assert('message', 'Message cannot be blank').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		req.flash('errors', errors);
		return res.redirect('/index');
	}
	var from = req.body.email;
	var name = req.body.name;
	var body = req.body.message;
	var to = 'andy@steamwhistle.io';
	var subject = 'Contact Form | Steam Whistle';
	var mailOptions = {
		to: to,
		from: from,
		subject: subject,
		text: body
	};
	transporter.sendMail(mailOptions, function(err) {
		if (err) {
			req.flash('errors', { msg: err.message });
			return res.redirect('/index');
		}
		req.flash('success', { msg: 'Email has been sent successfully!' });
		res.redirect('/index');
	});
};