var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = new mongoose.Schema({
  isTech: { type: Boolean, default: false },
  email: { type: String, unique: true, index: true, trim: true },
  password: { type: String },
  firstName: {type: String},
  lastName: {type: String},
  address: {type: String},
  city: {type: String},
  county: { type: String },
  state: {type: String},
  zip: {type: Number},
  phone: {type: String}
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);
