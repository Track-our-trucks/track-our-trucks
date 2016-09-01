angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){

  $scope.theDate = new Date()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }


var getStops = val => {
    var stopsArr = [];
    for(var i = 0; i < val.length; i++){
      if(val[i].event === 11 || val[i].event === 12){
        stopsArr.push(val[i]);
      }

    }
    if(stopsArr[0].event === 12){
      stopsArr.splice(0, 1)
    }

    for(var j = 0; j < stopsArr.length; j++){

     if(stopsArr[j + 1]){
      	stopsArr[j + 1].stopTime = (stopsArr[j + 1].fixTime).getMilliseconds() - (stopsArr[j].fixTime).getMilliseconds();
      	stopsArr.splice(j, 1);
      }

    }
    if(stopsArr[stopsArr.length - 1].event === 12){
    	stopsArr[stopsArr.length - 1].stopTime = "Still there"
    	$scope.stops = stopsArr;
    }
    else {
      $scope.stops = stopsArr;
    }


}


  $scope.dateFilter = () => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getStops(filteredByDate);
  }









  $scope.dateFilter();



})
