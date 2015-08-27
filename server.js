var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var config = require('./config');
var port = config.PORT;
var mongoUri = config.MONGO_URI;

var leadsCtrl = require('./api/controllers/leadsCtrl');
var CartCtrl = require('./api/controllers/CartCtrl');
var techniciansCtrl = require('./api/controllers/techniciansCtrl');
var UserCtrl = require('./api/controllers/UserCtrl');
var passport = require('./api/services/passport');


// POLICIES //
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send("you aren't authed");
  return next();
};

var isTechnician = function(req, res, next){
	if (!req.user.isTech) return res.sendStatus(403);
};

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

/////////////////////////////////////////////////////////

// AUTHENTICATION //

app.use(session({
  secret: config.SECRET,
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
  successRedirect: '/#claim'
}));
app.get('/logout', function(req, res) {
  req.logout();
  return res.redirect('/#intro');
});

///////////////////////////////////////////////////

// CREATE AND READ LEADS //*
app.post('/api/leads', leadsCtrl.createLead);
app.get('/api/leads', isAuthed, leadsCtrl.readLead);

// CREATE NEW TECHNICIAN //
app.post('/api/technicians', techniciansCtrl.createTechnician);

// TESTING CART ON SESSION //

function cart(req, res, next){
	if(!req.session.cart){
		req.session.cart = [];
		next();
	}
	next();
}

app.post('/api/cart/', cart, CartCtrl.addProduct);
app.get('/api/cart/', cart, CartCtrl.getCart);
app.put('/api/cart/remove', cart, CartCtrl.deleteItem);
app.put('/api/cart/', cart, CartCtrl.updateItem);

// app.post('api/email/send', emailCtrl.sendEmail);

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongodb at ' + mongoUri);
});

app.listen(port, function(){
	console.log("now listening on port " + port);
});
