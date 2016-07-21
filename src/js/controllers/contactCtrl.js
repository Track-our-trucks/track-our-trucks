angular.module('trackOurTruck').controller('contactCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('contact');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('contact.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('contact.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}


})
