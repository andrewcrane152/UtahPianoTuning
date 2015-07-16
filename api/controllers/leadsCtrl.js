var LeadModel = require('../models/leadsModel');

module.exports = {
	createLead: function(req, res){
		console.log(req.body.lead);
		newLead = new LeadModel(req.body.lead);
		newLead.save(function(err, savedLead) {
		leadCounty = savedLead.county;
			if(err) res.status(500).json(err);
			else {
				cntyObj = {};
				cntyObj[leadCounty] = true;
				Technician
				.find({ $push: cntyObj })
				.exec(function(err, matchingTechArray) {
					if(err) res.status(500).json(err);
					res.json(matchingTechArray);
				});
		  }
		});
	},

	readLead: function(req, res){
		console.log('req.query = ', req.query);
		LeadModel.find(req.query)
		.exec(function(err, result){
			if (err) return res.sendStatus(500);
			return res.send(result);
		});
	}


};
