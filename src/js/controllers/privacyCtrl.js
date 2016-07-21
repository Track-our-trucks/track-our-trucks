angular.module('trackOurTruck').controller('privacyCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('privacy');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('privacy.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('privacy.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
