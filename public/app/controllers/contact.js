angular.module('tuneMyPiano')
.controller('contactCtrl', function($scope, emailService){

  $scope.sendContactUsEmail = function(fromEmail, fromName, fromPhone, toEmail, toName, subject, message){
		emailService.sendContactUsEmail(fromEmail, fromName, fromPhone, toEmail, toName, subject, message).then(function(response){
			$scope.fromEmail = '';
			$scope.fromName = '';
			$scope.message = '';
			alert('your message has been sent');
		})
	};



});
