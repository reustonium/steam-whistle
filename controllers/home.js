var vars = require('../config/variables');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
	service: 'Mandrill',
	auth: {
		user: vars.mandrill.user,
		pass: vars.mandrill.pass
	}
});
/**
* GET /index
* Landing Page.
*/
exports.index = function(req, res) {
	res.render('index');
};
/**
* POST /contact
* Send a contact form via Nodemailer.
*/
exports.postContact = function(req, res) {

	var from = req.body.email;
	var to = 'andy@steamwhistle.io';
	var subject = 'Contact Form | Steam Whistle';
	var mailOptions = {
		to: to,
		from: from,
		subject: subject,
		text: "hi Pal"
	};
	transporter.sendMail(mailOptions, function(err) {
		if (err) {
			req.flash('errors', { msg: err.message });
			return res.redirect('/');
		}
		req.flash('success', { msg: 'Email has been sent successfully!' });
		res.redirect('/');
	});
};