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
, cntyBoxElder: {type: Boolean}
, cntyCache: {type: Boolean}
, cntyDavis: {type: Boolean}
, cntyJuab: {type: Boolean}
, cntyMorgan: {type: Boolean}
, cntySaltLake: {type: Boolean}
, cntyTooele: {type: Boolean}
, cntyUtah: {type: Boolean}
, cntyWeber: {type: Boolean}
, cntyUinta: {type: Boolean}
,	submittedAt: { type: Date, default: Date.now}
});

TechniciansSchema.pre('update', function(next){
	this.submittedAt = new Date();
	next();
});

module.exports = mongoose.model('technician', TechniciansSchema);
