angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }
})
