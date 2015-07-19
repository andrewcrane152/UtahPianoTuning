var LeadModel = require('../models/leadsModel');
var Technician = require('../models/techniciansModel');
var User = require('../models/UserModel');

module.exports = {
	createLead: function(req, res){
		console.log(req.body.lead);
		newLead = new LeadModel(req.body.lead);
		newLead.save(function(err, savedLead) {
		leadCounty = savedLead.county;
		leadCounty = leadCounty.toLowerCase();
			if(err) res.status(500).json(err);
			else {
				query = {};
				query[leadCounty] = true;
				console.log('query: ', query);
				Technician
				.find(query)
				.populate('user_id')
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
