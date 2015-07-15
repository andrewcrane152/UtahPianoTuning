var app = angular.module('tuneMyPiano');

// app.directive('introHeader', function(){
//   return {
//     restrict: 'E',
//     templateUrl: "mainHeader.html",
//     transclude: true,
//     link: function(scope, element, attrs){
//
//     }
//   }
// })


app.directive('servicesDescription', function(){
    function link( $scope, element, attributes) {
      console.log('inside the function');
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



app.directive("bnModals", function( $rootScope, modals ) {
        return(link);
        function link( scope, element, attributes ) {
            scope.subview = null;
            element.on("click", function handleClickEvent( event ) {
                    if ( element[ 0 ] !== event.target ) {
                        return;
                    }
                    scope.$apply( modals.reject );
                }
            );
            $rootScope.$on("modals.open", function handleModalOpenEvent(event, modalType) {
                    scope.subview = modalType;
                }
            );
            $rootScope.$on("modals.close", function handleModalCloseEvent(event) {
                    scope.subview = null;
                }
            );
        }
    }
);
