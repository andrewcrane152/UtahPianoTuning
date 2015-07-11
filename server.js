('use strict');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 9999;
var mongoUri = "mongodb://localhost:27017/db";
var leadsCtrl = require('./api/controllers/leadsCtrl');
var techniciansCtrl = require('./api/controllers/techniciansCtrl');


var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(cors());


app.post('/api/leads', leadsCtrl.createLead);
app.get('/api/leads', leadsCtrl.readLead);


app.post('/api/technicians', techniciansCtrl.createTechnician);


// app.post('api/email/send', emailCtrl.sendEmail);

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongodb at ' + mongoUri);
});

app.listen(port, function(){
	console.log("now listening on port " + port);
});
