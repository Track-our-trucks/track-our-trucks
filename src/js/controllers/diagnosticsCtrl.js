angular.module('trackOurTruck').controller('diagnosticsCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getDs = val => {
    var dArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 20){
        dArr.push(val[i]);
      }
    }
    $scope.ds = dArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getDs(filteredByDate);
}
})
