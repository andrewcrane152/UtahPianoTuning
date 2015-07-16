angular.module('tuneMyPiano')
.controller("registerCtrl", function($scope, mainService, emailService){

	$scope.createTechnician = function(newTechnicianPerson, newTechnicianServices) {
		newTechnician = {
			newTechnicianPerson: newTechnicianPerson,
			newTechnicianServices: newTechnicianServices
		};
		console.log("registerCtrl", newTechnician);
		mainService.createTechnician(newTechnician).then(function(response){
			console.log("register.js" + response);
		}, function(error){
			console.log(error);
		});
	};

	$scope.sendTechnicianConfirmEmail = function(newTechnicianPerson, newTechnicainServices) {
		newTechnician = {
			newTechnicianPerson: newTechnicianPerson,
			newTechnicianServices: newTechnicianServices
		};
		emailService.sendTechnicianConfirmEmail(newTechnician).then(function(response){
			$scope.newTechnicianPerson.email = '';
			$scope.newTechnicianPerson.firstName = '';
			$scope.newTechnicianPerson.lastName = '';
			$scope.newTechnicainServices = '';
			alert('We have just sent you a confirmation email.  Thank you for your support!');
			});
	};

	$scope.toggle = function() {
		$scope.isVisible = !$scope.isVisible;
	};
	$scope.isVisible = false;

});
