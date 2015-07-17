var app = angular.module('tuneMyPiano', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $httpProvider){
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

	.when('/contact', {
		templateUrl: 'app/views/contact.html',
		controller: 'contactCtrl'
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
	});

	$httpProvider.interceptors.push(function($location) {
		return {
			'responseError': function(res) {
				if (res.status === 401) {
					$location.path('/intro');
				}
				return res;
			}
		};
	});

});
