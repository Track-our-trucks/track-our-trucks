angular.module('trackOurTruck').controller('welcomeCtrl', function($scope, $state) {

  $scope.modalOff = function() {

      $scope.modalOn = false;
    

  }

$scope.loginModal = function () {

  $scope.modalOn = true;


}


})
