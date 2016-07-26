angular.module('trackOurTruck').controller('vehicleCtrl', ($scope, $state, vehicleService, $interval) => {
  $scope.tab = 0;

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };


   $scope.vehicleTime;

   $scope.vehicleTimer = () => {
     $scope.vehicleTime = $interval( () => {
       $scope.getUserVehicle();
     }, 10000)
   }

   $scope.vehicleTimer()

   $scope.vehicleStopTimer = () => {
     $interval.cancel($scope.vehicleTime)
     $scope.vehicleTime = undefined;
   }

   $scope.getUserVehicle = () => {
     var payloadData = $auth.getPayload()
     userService.getUser(payloadData.sub).then(response => {
        $scope.tracker = response.data.vehicles[0].timeDistanceProfiles;
     })
   }





let theFilterer = (val) => {
  if(!$scope.theDate){
    return (new Date(val.fixTime)).toDateString() === (new Date()).toDateString();
  }
  else {

    return (new Date(val.fixTime)).toDateString() == new Date($scope.theDate).toDateString();


  }
}
$scope.fireFilter = () => {
  $scope.theDayPins = $scope.tracker.filter(theFilterer)
  if ($scope.theDate){
    $scope.positionFilter();
  }
}
$scope.fireFilter();





$scope.positionFilter = () => {

  var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  var newCompass;
  $scope.directions = [];
  var newPos = [];
  for (let i = 0; i < $scope.theDayPins.length; i++) {
      var posObj = {
        pos:[$scope.theDayPins[i].lat, $scope.theDayPins[i].long]
      };

      vehicleService.getAddress(posObj).then(res => {
        var addressWithTime = {
          address: res.data.results[0].formatted_address,
          time: new Date($scope.theDayPins[i].fixTime)
        }
        newPos.push(addressWithTime);

      })

      var val = Math.floor(($scope.tracker[i].heading / 22.5) + 0.5);
      newCompass =  compass[(val % 16)];


      $scope.directions.push(newCompass);


  }



  $scope.addresses = newPos;

  var newPin = [];
  var newLine = [];
  for (let i = 0; i < $scope.theDayPins.length; i++) {
    if((new Date($scope.theDayPins[i].fixTime)).toDateString() === (new Date()).toDateString()){
      var pinObj = {
        pos:[$scope.theDayPins[i].lat, $scope.theDayPins[i].long]
      };
        newPin.push(pinObj.pos);

        newLine.push([$scope.theDayPins[i].lat, $scope.theDayPins[i].long]);
  }


    }


  $scope.pins = newPin;


  $scope.lines = newLine;



};
$scope.positionFilter();





})
