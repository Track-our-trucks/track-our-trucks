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
      if(val[i].event === 12){
        stopsArr.push(val[i]);
      }
    }
    for(let i = 0; i < stopsArr.length; i++){
      var hours = Math.floor(stopsArr[i].stopTime/1000/60/60)
      var minutes = Math.floor((stopsArr[i].stopTime/1000/60) - (hours * 60))
      stopsArr[i].stopTime = hours + ':' + minutes;
    }
    $scope.stops = stopsArr;
}

  var dateFilter = () => {
    var filteredByDate = [];
    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      if((new Date($scope.vehicle.timeDistanceProfiles[i].fixTime)).toDateString() === (new Date($scope.theDate)).toDateString()){
        filteredByDate.push($scope.vehicle.timeDistanceProfiles[i]);
      }
    }
    getStops(filteredByDate);
  }


  $scope.getStopTime = () => {

    for(var i = 0; i < $scope.vehicle.timeDistanceProfiles.length; i++){
      // if($scope.vehicle.timeDistanceProfiles[i].event === 12 && !$scope.vehicle.timeDistanceProfiles[i + 1]){
      //   getStops(val);
      //   // $scope.stillThere = true;
      //   // $scope.showTime = false;
      //   // return;
      // }
      if($scope.vehicle.timeDistanceProfiles[i].event === 12 && $scope.vehicle.timeDistanceProfiles[i + 1].event === 11){

        var diff = Math.abs($scope.vehicle.timeDistanceProfiles[i + 1].fixTime - $scope.vehicle.timeDistanceProfiles[i].fixTime)
        $scope.vehicle.timeDistanceProfiles[i].stopTime = diff;
        // $scope.stillThere = false;
        // $scope.showTime = true;
      }
  }
  dateFilter();
}







  $scope.getStopTime();



})
