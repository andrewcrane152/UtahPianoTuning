angular.module('tuneMyPiano')
.service('mainService', function($http){
	this.createLead = function(newLead){
		console.log("request service", newLead);
		return $http({
			method: 'POST',
			url: 'http://localhost:9898/api/leads',
			data: { lead: newLead }
		})
	};

	this.readLead = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9898/api/leads'
		})
	}

	this.createTechnician = function(newTechnician){
		console.log("technician service", newTechnician);
		return $http({
			method: 'POST',
			url: 'http://localhost:9898/api/technicians',
			data: { technician: newTechnician }
		})
	}

})