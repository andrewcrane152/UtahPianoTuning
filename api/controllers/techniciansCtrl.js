var Technician = require('../models/techniciansModel');
var User = require('../models/UserModel');

module.exports = {
	createTechnician: function(req, res) {
		console.log(req.body.technician);
		newService = req.body.technician.newTechnicianServices;
		newUser = req.body.technician.newTechnicianPerson;
		technicianInstance = new Technician(newService);
		userInstance = new User(newUser);
		response = {};
		technicianInstance.save(function(err, result){
			if (err) return res.status(500).json(err);
			response.newService = result;
			userInstance.save(function(err, result) {
				if (err) return res.status(500).json(err);
				response.newUser = result;
				return res.send(response);
			});
		});
	}
};
