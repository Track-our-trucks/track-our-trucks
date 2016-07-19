angular.module('trackOurTruck').controller('welcomeCtrl', function($scope, $state) {

  $scope.modalOff = function() {

      $state.go('welcome');
      $scope.modalOn = false;


  }

$scope.loginModal = function () {

  $scope.modalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
