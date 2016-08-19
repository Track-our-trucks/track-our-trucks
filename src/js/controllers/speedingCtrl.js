angular.module('trackOurTruck').controller('speedingCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getSpeeds = val => {
    var speedsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 60 || val[i].event === 61 || val[i].event === 62 || val[i].event === 63){
        speedsArr.push(val[i]);
      }
    }
    $scope.speeds = speedsArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getSpeeds(filteredByDate);
  }
  $scope.dateFilter();


})
