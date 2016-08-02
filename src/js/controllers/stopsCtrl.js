angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){

  $scope.theDate = (new Date()).toDateString()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }


  $scope.dateFilter = () => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        $scope.filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }

    }
    $scope.getStops(filteredByDate);
  }


  $scope.getStops = (val) => {
    var stopsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 12){
        stopsArr.push(val[i]);
      }

    }
    $scope.theStopsArray = stopsArr;

  }

  $scope.dateFilter();

})
