angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){

  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }



  var getStops = (val) => {
    var stopsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 12){
        stopsArr.push(val[i]);
      }
    }
    $scope.theStopsArray = stopsArr;
}

  var getStopTime = (val) => {
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 12 && val[i + 1].event === 11){
        val[i].stopTime = val[i + 1].fixTime - val[i].fixTime
      }
  }
  getStops()
}


  $scope.dateFilter = () => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getStopTime(filteredByDate);
  }





  $scope.dateFilter();



})
