angular.module('tuneMyPiano')
.controller('requestCtrl', function($scope, mainService, emailService, $location){

	$scope.createLead = function(newLead) {
		console.log("requestCtrl", newLead);
		mainService.createLead(newLead).then(function(response){
			console.log(response);
			$scope.show = !$scope.show;
		}, function(error){
			console.log(error);
		});
	};


	$scope.sendLeadConfirmEmail = function(newLead) {
		emailService.sendLeadConfirmEmail(newLead).then(function(response){
			$scope.newLead.email = '';
			$scope.newLead.firstName = '';
			$scope.newLead.lastName = '';
			});
	};

	$scope.toggle = function() {
		$scope.isVisible = !$scope.isVisible;
	};
	$scope.isVisible = false;

	$scope.goToTheIntroPageRightNow = function(){
	  $location.path("#intro");
	  $('#myModal').modal('hide');
	  $('body').removeClass('modal-open');
	  $('.modal-backdrop').remove();
	};

});
