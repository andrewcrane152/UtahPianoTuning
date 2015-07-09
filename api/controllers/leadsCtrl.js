var LeadModel = require('../models/leadsSchema');

module.exports = {
	createLead: function(req, res){
		console.log(req.body.lead);
		newLead = new LeadModel(req.body.lead);
		newLead.save(function(err, result){
			if(err) res.status(500).json(err)
			else res.json(result)
		})
	},

	readLead: function(req, res){
		console.log('req.query = ', req.query);
		LeadModel.find(req.query)
		.exec(function(err, result){
			if (err) return res.sendStatus(500);
			return res.send(result);
		})
	}


}