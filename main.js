'use strict';

var express = require('express');
var mongoose = require('mongoose');
var conf = require('./config');

// Connect to mongodb
mongoose.connect('mongodb://localhost/test') // conf.MONGOHQ_URL
console.log('DB connection established');

// Express
var app = express();

// Env. settings
app.use(express.static(__dirname + '/public'));

// Routes
var routes = require('./routes');

// Start server
app.listen(3000, function() {
	console.log('Server listening on port 3000...');
});