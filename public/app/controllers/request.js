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

	
});
