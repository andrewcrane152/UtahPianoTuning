var app = angular.module('tuneMyPiano');
app.service('emailService', function($http){
	this.sendContactUsEmail = function(fromEmail, fromName, fromPhone, toEmail, toName, subject, message){
		return $http({
			method: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'TtlWFCRLtEE65RBCTrC0lg',
				'message': {
					'from_email': fromEmail,
					'to': [
						{
							'email': toEmail,
							'name': toName,
							'type': 'to'
						}
					],
					'subject': subject,
					'html': '<p>' + message + '</p> <p> - ' + fromName + '</p> <p> - ' + fromPhone
				}
			}
		});
	};

	this.sendLeadConfirmEmail = function(newTechnician){
			console.log('sendLeadConfirmEmail made it to the service');
		return $http({
			method: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'TtlWFCRLtEE65RBCTrC0lg',
				'message': {
					'from_email': 'utahpianotuning@gmail.com',
					'to': [
						{
							'email': newLead.email,
							'name': newLead.firstName + " " + newLead.lastName,
							'type': 'to'
						}
					],
					'subject': 'Piano Service Request Confirmation',
					'html': '<p>Hello ' + newLead.firstName + '! </p> <br> <p> - Thank you for your trust in us to find the perfect technian for you Piano.  Your request generated an email to all of our technicians that have indicated they service your area and are capable of doing the work you have requested.</p> <p>You can expect to hear from a technician within 24 business hours.</p> <br> <p><strong> - Tune My Piano</strong></p>'
				}
			}
		});
	};

	this.sendTechnicianConfirmEmail = function(newTechnician){
			console.log('sendTechnicianConfirmEmail made it to the service');
		return $http({
			method: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'TtlWFCRLtEE65RBCTrC0lg',
				'message': {
					'from_email': 'utahpianotuning@gmail.com',
					'to': [{
							'email': newTechnician.email,
							'name': newTechnician.firstName + " " + newTechnician.lastName,
							'type': 'to'
						}],
					'subject': 'New Technician Confirmation',
					// 'html': "Testing"
					'html': '<p>Hello ' + newTechnician.firstName + ", </p> <br> <p> - Thank you for your trust in us to help generate leads for you.  You will receive emails from us when a lead is generated that matches the counties you service and the types of services you offer.</p> <p>If you have any questions, please feel free to us our contact us page to reach us directly. </p> <br> <p><strong>Tune My Piano</strong></p>"
				}
			}
		});
	};

});
