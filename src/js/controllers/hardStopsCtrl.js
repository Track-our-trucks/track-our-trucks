angular.module('trackOurTruck').controller('hardStopsCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }
})