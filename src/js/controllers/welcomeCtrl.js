angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('welcome');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('welcome.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('welcome.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
