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

	$scope.descriptions=[{
		"tuning": "<u>Tuning</u> - the most basic service technicians perform on a piano.  Usually this service can include minor repairs and adjustments to the piano that improve it's playability/stability.",
		"show": false
	}, {
		"pitchRaise": "<u>Pitch Raise</u> - if a piano hasn't been tuned in 2+ years it will likely need a pitch raise before it can receive a tuning.",
		"show": false
	}, {
		"repairs": "<u>Repairs</u> - phrases such as; \"Sticking Keys\"\, \"Pedal Not Working\"\, \"Note doesn\'t work right\"\, and \"Makes a weird sound\" all indicate that a repair is needed.",
		"show": false
	}, {
		"cleaning": "<u>Cleaning</u> - have your technician remove years of dust, spider webs, foreign objects and more in a way that is gentle and safe for the piano.",
		"show": false
	}, {
		"regulation": "<u>Regulation</u> - an extensive overhaul of your piano's action that completely evens out each key's weight, feel, depression depth, volume, and performance.",
		"show": false
	}, {
		"purchaseConsult": "<u>Purchase Consult</u> - You wouldn't buy a car without having it checked by a mechanic you trust.  Do the same with a piano.  Piano technicians can help you know what to look for, what to avoid, and advise you on fair prices for your area.",
		"show": false
	}, {
		"estimate": "<u>Estimate</u> - Have a technician come to your home to provide a detailed quote on a big project you might be considering for your piano.",
		"show": false
	}, {
		"appraisal": "<u>Appraisal</u> - Find out your piano's current value and have it documented.",
		"show": false
	}];

	$scope.hover=function()

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
