angular.module('tuneMyPiano')
.controller("registerCtrl", function($scope, mainService){

	$scope.createTechnician = function(newTechnician) {
		console.log("registerCtrl", newTechnician);
		mainService.createTechnician(newTechnician).then(function(response){
			console.log("register.js" + response)
		}, function(error){
			console.log(error);
		})
	}
});