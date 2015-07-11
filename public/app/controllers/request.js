angular.module('tuneMyPiano')
.controller('requestCtrl', function($scope, mainService, emailService){

	$scope.createLead = function(newLead) {
		console.log("requestCtrl", newLead);
		mainService.createLead(newLead).then(function(response){
			console.log(response);
		}, function(error){
			console.log(error);
		});
	};
	//
	// $scope.sendEmail = function(fromEmail, fromName, toName, subject, message){
	// 	emailService.sendEmail(fromEmail, fromName, toEmail, toName, subject, message).then(function(response){
	// 		$scope.fromEmail = '';
	// 		$scope.fromName = '';
	// 		$scope.message = '';
	// 		alert("Thank you for your request.");
	// 	});
	// };
	//
});
