angular.module('trackOurTruck').controller('diagnosticsCtrl', function($state, $scope, vehicleService){
$scope.back = () => {
  $state.go('userHome.vehicleInfo.behaviors');
  $scope.wideModalOn = true;
}
})
