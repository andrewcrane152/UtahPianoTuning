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


// I manage the views that are required to render the modal windows. I don't
// actually define the modals in anyway - I simply decide which DOM sub-tree
// should be linked. The means by which the modal window is defined is
// entirely up to the developer.
app.directive("bnModals", function( $rootScope, modals ) {
        // Return the directive configuration.
        return( link );
        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            // I define which modal window is being rendered. By convention,
            // the subview will be the same as the type emitted by the modals
            // service object.
            scope.subview = null;
            // If the user clicks directly on the backdrop (ie, the modals
            // container), consider that an escape out of the modal, and reject
            // it implicitly.
            element.on(
                "click",
                function handleClickEvent( event ) {
                    if ( element[ 0 ] !== event.target ) {
                        return;
                    }
                    scope.$apply( modals.reject );
                }
            );
            // Listen for "open" events emitted by the modals service object.
            $rootScope.$on(
                "modals.open",
                function handleModalOpenEvent( event, modalType ) {
                    scope.subview = modalType;
                }
            );
            // Listen for "close" events emitted by the modals service object.
            $rootScope.$on(
                "modals.close",
                function handleModalCloseEvent( event ) {
                    scope.subview = null;
                }
            );
        }
    }
);
