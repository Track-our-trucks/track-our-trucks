angular.module('trackOurTruck').controller('welcomeCtrl', function($scope, $state) {

  $scope.modalOff = function() {

      $state.go('welcome');

      $scope.thinModalOn = false;


  }

$scope.loginModal = function () {

  $state.go('welcome.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
