angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){

  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  $scope.getStops = () => {
    var stopsArr = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if($scope.vehicle.timeDistanceProfiles[i].event === 12){
        stopsArr.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
  }
  $scope.getStops();



})
