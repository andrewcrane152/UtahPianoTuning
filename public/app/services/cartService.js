app.service('cartService', function($http, $q){

	this.addToCart = function(data){
		return $http({
			method: 'POST',
			url: 'http://localhost:9999/api/cart/',
			data: data
		});
	};

	this.getCart = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:9999/api/cart'
		});
	};

	this.updateItem = function(data){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9999/api/cart',
			data: data
		});
	};

	this.removeItem = function(id){
		return $http({
			method: 'PUT',
			url: 'http://localhost:9999/api/cart/remove',
			data: {
				id: id
			}
		});
	};

  

});
