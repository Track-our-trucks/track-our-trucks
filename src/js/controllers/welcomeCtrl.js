angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('welcome');

      $scope.thinModalOn = false;


  }

$scope.loginModal = () => {

  $state.go('welcome.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
