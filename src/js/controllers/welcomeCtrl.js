angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('welcome');
      $scope.modalOn = false;


  }

$scope.loginModal = () => {

  $scope.modalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
