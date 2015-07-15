angular.module('tuneMyPiano')
.controller("registerCtrl", function($scope, mainService, emailService){

	$scope.createTechnician = function(newTechnician) {
		console.log("registerCtrl", newTechnician);
		mainService.createTechnician(newTechnician).then(function(response){
			console.log("register.js" + response);
		}, function(error){
			console.log(error);
		});
	};

	$scope.sendTechnicianConfirmEmail = function(newTechnician) {
		emailService.sendTechnicianConfirmEmail(newTechnician).then(function(response){
			$scope.newTechnician.email = '';
			$scope.newTechnician.firstName = '';
			$scope.newTechnician.lastName = '';
			alert('We have just sent you a confirmation email.  Thank you for your support!');
			});
	};

});
