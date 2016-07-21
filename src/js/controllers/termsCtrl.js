angular.module('trackOurTruck').controller('termsCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('terms');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('terms.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('terms.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
