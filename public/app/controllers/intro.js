angular.module('tuneMyPiano')
.controller('introCtrl', function($scope, $location){

$scope.goToTheRegisterPageRightNow = function(){
  $location.path("#register");
  $('#myModal').modal('hide');
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
};

});
