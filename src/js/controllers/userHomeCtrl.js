angular.module('trackOurTruck').controller('userHomeCtrl', ($scope, $state) => {
  $scope.modalOff = () => {

      $state.go('userHome');

      $scope.wideModalOn = false;


  }
  $scope.vehicleModal = () => {

    $state.go('userHome.vehicleInfo');

    $scope.wideModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

  $scope.userInfo = () => {

    $state.go('userHome.userInfo');

    $scope.wideModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

})
