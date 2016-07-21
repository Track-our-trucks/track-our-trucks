angular.module('trackOurTruck').controller('aboutCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('about');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('about.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('about.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
