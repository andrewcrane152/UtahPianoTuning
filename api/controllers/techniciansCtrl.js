var TechniciansModel = require('../models/techniciansSchema');

module.exports = {
	createTechnician: function(req, res) {
		console.log(req.body.technician);
		newTechnician = new TechniciansModel(req.body.technician);
		newTechnician.save(function(err, result){
			if(err){
				return res.status(500).json(err)
			} else {
				return res.json(result)
			}
		});
	}
}