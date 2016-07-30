angular.module('trackOurTruck').controller('inspectionCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }
})
