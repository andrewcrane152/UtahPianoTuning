app.service('emailService', function($http){
	this.sendEmail = function(fromEmail, fromName, toEmail, toName, subject, message){
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
					'html': '<p>' + message + '</p> <p> - ' + fromName + '</p>'
				}
			}
		});
	};
});
