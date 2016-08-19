angular.module('trackOurTruck').controller('hardTurnsCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getHardTurns = val => {
    var hardTurnsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 92 || val[i].event === 93){
        hardTurnsArr.push(val[i]);
      }
    }
    $scope.hardTurns = hardTurnsArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getHardTurns(filteredByDate);
})
