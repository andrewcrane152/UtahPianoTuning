var app = angular.module('tuneMyPiano', ['ngRoute'])

app.config(function($routeProvider){
	console.log('app loaded');
	$routeProvider
	.when('/intro', {
		templateUrl: 'app/views/intro.html',
		controller: 'introCtrl',
		resolve: {
			test: function(){
				return console.log("hello?");
			}
		}
	})
	.when('/request', {
		templateUrl: 'app/views/request.html',
		controller: 'requestCtrl'
	})

	.when('/claim', {
		templateUrl: 'app/views/claim.html',
		controller: 'claimCtrl',
		resolve: {
			getLeads: function($q, mainService){
				var deferred = $q.defer();
					console.log('resolve working');
					mainService.readLead().then(function(response){
					messages = response.data;
					deferred.resolve(messages);
				});
				return deferred.promise;
			}
		}
	})	

	.when('/register', {
		templateUrl: 'app/views/register.html',
		controller: 'registerCtrl'
	})

	.otherwise({
		redirectTo: '/intro'
	})

})