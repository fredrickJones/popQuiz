'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());



app.listen(port);