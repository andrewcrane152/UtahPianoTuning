var app = angular.module('tuneMyPiano')

.directive('servicesDescription', function(){
    function link( $scope, element, attributes) {
      var expression = attributes.servicesDescription;
      var duration = (attributes.slideShowDuration || "fast");
      if (!$scope.$eval(expression)){
        element.hide();
      }
      $scope.$watch(expression, function(newValue, oldValue){
        if (newValue === oldValue) {
          return;
        }
        if (newValue) {
          element.stop( true, true ).slideDown(duration);
        } else {
          element.stop(true, true).slideUp(duration);
        }
      });
    }
    return {
      link: link,
      restrict: 'E',
      templateUrl: 'app/directives/servicesDescription.html'
    };
});

app.directive('whatToExpect', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/directives/whatToExpect.html'
  };
});


app.directive('cart', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/directives/cart.html',
		link: function(scope, element, attrs){
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
		},
		controller: function($scope, cartService, $location, customerService){
			$scope.updateItem = function(item, id, quantity){
				console.log(22222222, item, id, quantity);
				var data = {
					id: id,
					quantity: quantity
				};
				cartService.updateItem(data).then(function(response){
					$scope.cart = response.data;
				});
			};

			$scope.removeItem = function(item, id){
				console.log(3333333, item,444444, id);
				cartService.removeItem(id).then(function(response){
					$scope.cart = response.data;
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
		}
	};
});
