'use strict';

var mongoose = require('mongoose');
var conf = require('./config');

var Todo = new mongoose.Schema({
	content		: String,
	updated_at	: Date
});

var model = mongoose.model('Todo', Todo);

