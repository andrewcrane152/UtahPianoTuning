angular.module('tuneMyPiano')
.controller('requestCtrl', function($scope, mainService){

	$scope.createLead = function(newLead) {
		console.log("requestCtrl", newLead);
		mainService.createLead(newLead).then(function(response){
			console.log(response)
		}, function(error){
			console.log(error);
		})
	}
})