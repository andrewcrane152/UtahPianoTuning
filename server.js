var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//
var session = require('express-session');
//
var port = 9999;
var mongoUri = "mongodb://localhost:27017/tune-my-piano";
var leadsCtrl = require('./api/controllers/leadsCtrl');
var techniciansCtrl = require('./api/controllers/techniciansCtrl');
//
var UserCtrl = require('./api/controllers/UserCtrl');
var passport = require('./api/services/passport');
//

// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  return next();
};

var isTechnician = function(req, res, next){
	if (!req.user.isTech) return res.sendStatus(403);
};

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////////////////////////////

// AUTHENTICATION //
app.use(bodyParser.json());
app.use(session({
  secret: 'dallins-head-is-fatter-than-mine',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/user', UserCtrl.register);
app.get('/user', isAuthed, UserCtrl.me);
app.put('/user', isAuthed, UserCtrl.update);
app.get('/user/is_tech', isTechnician, function(req, res) {
	res.sendStatus(200);
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/user'
}));
app.get('/logout', function(req, res) {
  req.logout();
  return res.send('logged out');
});

///////////////////////////////////////////////////

// CREATE AND READ LEADS //*
app.post('/api/leads', leadsCtrl.createLead);
app.get('/api/leads', leadsCtrl.readLead);

// CREATE NEW TECHNICIAN //
app.post('/api/technicians', techniciansCtrl.createTechnician);


// app.post('api/email/send', emailCtrl.sendEmail);

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongodb at ' + mongoUri);
});

app.listen(port, function(){
	console.log("now listening on port " + port);
});
