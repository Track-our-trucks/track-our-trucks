angular.module('trackOurTruck').controller('hardStopsCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getHardStops = val => {
    var hardStopsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 90){
        hardStopsArr.push(val[i]);
      }
    }
    $scope.hardStops = hardStopsArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getHardStops(filteredByDate);
})
