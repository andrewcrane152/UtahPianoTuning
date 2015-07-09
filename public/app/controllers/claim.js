angular.module('tuneMyPiano')
.controller('claimCtrl', function($scope, mainService, getLeads){
	
	$scope.messages = getLeads;

});