var mongoose = require('mongoose');

var LeadSchema = new mongoose.Schema({
	firstName: { type: String }
,	lastName: { type: String }
,	address: { type: String }
,	city: { type: String }
,	county: { type: String }
,	state: { type: String }
,	zip: { type: Number}
,	phone: { type: String }
,	email: { type: String }
,	pianoKind: { type: String, enum: ["Grand", "Console", "Spinet", "Old Upright"]}
,	pianoBrand: { type: String }
,	pianoAge: { type: String, enum: ["0-15 yrs", "15-30 yrs", "30-50 yrs", "50-75 yrs", "75+ yrs"]}
,	lastTuned: { type: String, enum: ["0-1 yrs", "1-2 yrs", "3-5 yrs", "5-10 yrs", "10+ years"]}
,	tuning: { type: Boolean}
,	pitchRaise: { type: Boolean}
,	repairs: { type: Boolean}
,	internalCleaning: { type: Boolean}
,	regulation: { type: Boolean}
,	purchaseConsult: { type: Boolean}
,	estimate: { type: Boolean}
,	appraisal: { type: Boolean}
,	other: { type: Boolean}
,	comment: { type: String}
,	submittedAt: { type: Date, default: Date.now}
});

LeadSchema.pre('update', function(next){
	this.submittedAt = new Date();
	next();
});

module.exports = mongoose.model('request', LeadSchema);