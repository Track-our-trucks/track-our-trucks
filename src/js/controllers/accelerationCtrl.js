angular.module('trackOurTruck').controller('accelerationCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }
})
