angular.module('tuneMyPiano')
.controller('contactCtrl', function($scope, emailService){

  $scope.sendEmail = function(fromEmail, fromName, fromPhone, toEmail, toName, subject, message){
		emailService.sendEmail(fromEmail, fromName, fromPhone, toEmail, toName, subject, message).then(function(response){
			$scope.fromEmail = '';
			$scope.fromName = '';
			$scope.message = '';
			alert('your message has been sent');
		})
	};



});
