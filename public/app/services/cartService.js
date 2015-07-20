app.service('cartService', function($http, $q){

	this.addToCart = function(message){
		return $http({
			method: 'POST',
			url: 'http://localhost:9999/api/cart/',
			message: message
		});
	};

	this.getCart = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/api/cart'
		});
	};

	this.updateItem = function(message){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9999/api/cart',
			message: message
		});
	};

	this.removeItem = function(id){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9999/api/cart/remove',
			message: message
		});
	};



});
