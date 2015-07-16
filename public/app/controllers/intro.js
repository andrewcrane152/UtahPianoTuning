angular.module('tuneMyPiano')
.controller('introCtrl', function($scope, $location){

$scope.goToTheRegisterPageRightNow = function(){
  console.log($location.path());
  $location.path("#/register");
};

});
