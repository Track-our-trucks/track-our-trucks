angular.module('trackOurTruck').controller('stopsCtrl', function($state, $scope, vehicleService){

  $scope.theDate = (new Date()).toDateString()
  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.back = () => {
    $state.go('userHome.vehicleInfo.behaviors');
    $scope.wideModalOn = true;
  }




  var dateFilter = val => {
      var test1 = (new Date(val.fixTime)).toDateString();
      var test2 = (new Date($scope.theDate)).toDateString();
      return test1 === test2;
  }

  $scope.filteredByDate = $scope.vehicle.timeDistanceProfiles.filter(dateFilter)


  $scope.getStops = () => {
    var stopsArr = [];
    for(var i = 0; i < $scope.filteredByDate.length; i++){
      if($scope.filteredByDate[i].event === 12){
        stopsArr.push($scope.filteredByDate[i]);
      }
      $scope.theStopsArray = stopsArr;
    }

  }
  $scope.getStops();


})
