angular.module('trackOurTruck').controller('speedingCtrl', function($state, $scope, vehicleService){
  $scope.back = () => {

    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;

  }
})
