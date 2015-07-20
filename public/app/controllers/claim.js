angular.module('tuneMyPiano')
.controller('claimCtrl', function($scope, mainService, getLeads, cartService, $location){

	$scope.messages = getLeads;

	$scope.link = function(scope, element, attrs){
		if(scope.cart){
			scope.$watch('cart', function(){
				var total = 0;
				for(var i = 0; i < scope.cart.length; i++){
					scope.cart[i].total = scope.cart[i].quantity * 10;
					total += scope.cart[i].total;
					scope.total = total.toFixed(2);
				}
			});
		}
	};

	$scope.updateItem = function(message){
		console.log(22222222, item, id, quantity);
		cartService.updateItem(message).then(function(response){
			$scope.cart = response.message;
		});
	};

	$scope.removeItem = function(item, id){
		console.log(3333333, item,444444, id);
		cartService.removeItem(id).then(function(response){
			$scope.cart = response.message;
		});
	};

	$scope.checkout = function(){
		$location.path('/checkout/');
	};

	$scope.showCart = function(){
		$scope.show = !$scope.show;
	};

	$scope.backToStore = function(){
		$scope.show = !$scope.show;
		$location.path('/store/');
	};

	$scope.addToCart = function(message){
		cartService.addToCart(message).then(function(response){
			$scope.cart = response.message;
			$('#claimButton').prop('disabled', true);
			//TODO CHECK TO SEE IF BUTTON IS DISABLED //
		});
	};

});

// app.directive('cart', function(){
// 		return {
// 			restrict: 'E',
// 			templateUrl: 'app/directives/cart.html',
// 			link: function(scope, element, attrs){
// 				if(scope.cart){
// 					scope.$watch('cart', function(){
// 						var total = 0;
// 						for(var i = 0; i < scope.cart.length; i++){
// 							scope.cart[i].total = scope.cart[i].quantity * 10;
// 							total += scope.cart[i].total;
// 							scope.total = total.toFixed(2);
// 						}
// 					});
// 				}
// 			},
			// controller: function($scope, cartService, $location, customerService){
			// 	$scope.updateItem = function(item, id, quantity){
			// 		console.log(22222222, item, id, quantity);
			// 		var data = {
			// 			id: id,
			// 			quantity: quantity
			// 		};
			// 		cartService.updateItem(data).then(function(response){
			// 			$scope.cart = response.data;
			// 		});
			// 	};
			//
			// 	$scope.removeItem = function(item, id){
			// 		console.log(3333333, item,444444, id);
			// 		cartService.removeItem(id).then(function(response){
			// 			$scope.cart = response.data;
			// 		});
			// 	};
			//
			// 	$scope.checkout = function(){
			// 		$location.path('/checkout/');
			// 	};
			//
			// 	$scope.showCart = function(){
			// 		$scope.show = !$scope.show;
			// 	};
			// 	$scope.backToStore = function(){
			// 		$scope.show = !$scope.show;
			// 		$location.path('/store/');
			// 	};
	// 		}
	// 	};
	// });
