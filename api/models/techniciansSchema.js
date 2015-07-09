var mongoose = require('mongoose');

var TechniciansSchema = new mongoose.Schema({
	firstName: {type: String}
,	lastName: {type: String}
,	address: {type: String}
,	city: {type: String}
,	state: {type: String}
,	zip: {type: Number}
,	phone: {type: String}
,	email: {type: String}
,	pianoKindGrand: {type: Boolean}
,	pianoKindConsole: {type: Boolean}
,	pianoKindSpinet: {type: Boolean}
,	pianoKindOldUpright: {type: Boolean}
,	tuning: {type: Boolean}
,	pitchRaise: {type: Boolean}
,	repairs: {type: Boolean}
,	internalCleaning: {type: Boolean}
,	regulation: {type: Boolean}
,	purchaseConsult: {type: Boolean}
,	estimate: {type: Boolean}
,	appraisal: {type: Boolean}
,	other: {type: Boolean}
,	comment: {type: String}

});


module.exports = mongoose.model('technician', TechniciansSchema);