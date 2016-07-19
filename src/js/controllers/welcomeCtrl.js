angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $scope.modalOn = false;


  }

$scope.loginModal = () => {

  $scope.modalOn = true;


}


})
