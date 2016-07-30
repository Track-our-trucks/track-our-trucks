angular.module('trackOurTruck').controller('lowBatteryCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }
})
