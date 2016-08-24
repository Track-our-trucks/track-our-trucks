angular.module('trackOurTruck').controller('idlingsCtrl', function($state, $scope, vehicleService){
  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }

  var getIdlings = val => {
    var idlsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 92 || val[i].event === 93){
        idlsArr.push(val[i]);
      }
    }
    $scope.idles = idlsArr;
}

  $scope.dateFilter = (val) => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getIdlings(filteredByDate);
  }
  })
