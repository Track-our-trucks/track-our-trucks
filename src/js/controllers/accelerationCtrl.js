angular.module('trackOurTruck').controller('accelerationCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getAccs = val => {
    var accsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 91){
        accsArr.push(val[i]);
      }
    }
    $scope.accs = accsArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getAccs(filteredByDate);
  }
  $scope.dateFilter();
})
