angular.module('tuneMyPiano')
.controller('requestCtrl', function($scope, mainService, emailService){

	$scope.createLead = function(newLead) {
		console.log("requestCtrl", newLead);
		mainService.createLead(newLead).then(function(response){
			console.log(response);
			$scope.show = !$scope.show;
		}, function(error){
			console.log(error);
		});
	};

	$scope.toggle = function() {
		$scope.isVisible = !$scope.isVisible;
	};

	$scope.isVisible = false;

	$scope.sendLeadConfirmEmail = function(newLead) {
		emailService.sendLeadConfirmEmail(newLead).then(function(response){
			$scope.newLead.email = '';
			$scope.newLead.firstName = '';
			$scope.newLead.lastName = '';
			alert('We have just sent you a confirmation email.  Thank you for your request!');
			});
	};

});
