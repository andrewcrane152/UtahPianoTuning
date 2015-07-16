var mongoose = require('mongoose');

var TechniciansSchema = new mongoose.Schema({
	user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	pianoKindGrand: {type: Boolean},
	pianoKindConsole: {type: Boolean},
	pianoKindSpinet: {type: Boolean},
	pianoKindOldUpright: {type: Boolean},
	tuning: {type: Boolean},
	pitchRaise: {type: Boolean},
	repairs: {type: Boolean},
	internalCleaning: {type: Boolean},
	regulation: {type: Boolean},
	purchaseConsult: {type: Boolean},
	estimate: {type: Boolean},
	appraisal: {type: Boolean},
	other: {type: Boolean},
	comment: {type: String},
	box_elder: { type: Boolean },
	cache: {type: Boolean},
	davis: {type: Boolean},
	juab: {type: Boolean},
	morgan: {type: Boolean},
	salt_lake: {type: Boolean},
	tooele: {type: Boolean},
	utah: {type: Boolean},
	weber: {type: Boolean},
	other: {type: Boolean},
	submittedAt: { type: Date, default: Date.now}
});

TechniciansSchema.pre('update', function(next){
	this.submittedAt = new Date();
	next();
});

module.exports = mongoose.model('technician', TechniciansSchema);
