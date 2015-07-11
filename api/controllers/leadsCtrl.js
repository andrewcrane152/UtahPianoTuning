var LeadModel = require('../models/leadsSchema');

module.exports = {
	createLead: function(req, res){
		console.log(req.body.lead);
		newLead = new LeadModel(req.body.lead);
		newLead.save(function(err, savedLead){
			leadCounty = "cnty" + savedLead.county;
			if(err) res.status(500).json(err);
			else Technician
				.find({})
				.exec(function(err, allTechsArray) {
					if(err) res.status(500).json(err);
					matchedTechs = allTechsArray.map(function(tech) {
						if (tech[leadCounty]) return tech;
					});
					res.json(matchedTechs);
				});
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
