/**
 * Module dependencies.
 */
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var path = require('path');
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
var session = require('express-session');

/**
 * Controllers (route handlers).
 */
var homeController = require('./controllers/home');

/**
 * API keys and Passport configuration.
 */
var vars = require('./config/variables');

/**
 * Create Express server.
 */
var app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.post('/', homeController.postContact);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d', app.get('port'));
});

module.exports = app;
