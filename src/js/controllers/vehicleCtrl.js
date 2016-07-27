angular.module('trackOurTruck').controller('vehicleCtrl', ($scope, $auth, $state, $rootScope, vehicleService, $interval, userService) => {
  $scope.tab = 0;

  $scope.theDate = new Date();

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };



   $scope.vehicleTime;



     var vehicleTimer = () => {
       $scope.vehicleTime = $interval( () => {
         $scope.getUserVehicle();
       }, 10000)
     }

   var vehicleStopTimer = () => {
     $interval.cancel($scope.vehicleTime)
     $scope.vehicleTime = undefined;
   }

   vehicleTimer()

   $rootScope.$on('$stateChangeSuccess', () => {
      if ($state.current.name === 'userHome.vehicleInfo.location') {
        vehicleTimer();
      } else {
      vehicleStopTimer();
      }
    })

    $scope.getUserVehicle = () => {
      var payloadData = $auth.getPayload()
      userService.getUser(payloadData.sub).then(response => {
         let vehicleArr = response.data.vehicles;
         let tracker = vehicleArr[0].timeDistanceProfiles;
         filter(tracker);
      })
    }




    var theFilterer = val => {
     return (new Date(val.fixTime)).toDateString() === (new Date($scope.theDate)).toDateString();
    }


    var filter = tracker => {



    let theDayPins = tracker;

    // .filter(theFilterer);



     $scope.positionFilter(theDayPins);

    }

    $scope.positionFilter = theDayPins => {



      var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
      var newCompass;
      $scope.directions = [];
      var newPos = [];
      for (let i = 0; i < theDayPins.length; i++) {

          var posObj = {
            pos:[theDayPins[i].lat, theDayPins[i].long]
          };



          // $scope.getAddress(posObj).then(function(res){
          //
          //   var addressWithTime = {
          //     address: res.data.results[0].formatted_address,
          //     time: new Date($scope.theDayPins[i].fixTime)
          //   }
          //
          //   newPos.push(addressWithTime);
          //
          // })


          var val = Math.floor((theDayPins[i].heading / 22.5) + 0.5);
          newCompass =  compass[(val % 16)];


          $scope.directions.push(newCompass);


      }



      $scope.addresses = newPos;

      var newPin = [];
      var newLine = [];
      for (let i = 0; i < theDayPins.length; i++) {

          var pinObj = {
            pos:[theDayPins[i].lat, theDayPins[i].long]
          };
            newPin.push(pinObj.pos);

            newLine.push([theDayPins[i].lat, theDayPins[i].long]);



        }


      $scope.pins = newPin;


      $scope.lines = newLine;



    }


//  $scope.fireFilter = () => {
//
//    vehicleService.theDate = $scope.theDate;
//    // vehicleService.fireFilter();
//    $scope.directions = vehicleService.directions;
//    $scope.pins = vehicleService.pins;
//
//    $scope.lines = vehicleService.lines;
//
//    $scope.center = $scope.lines[0];
//
//
//    vehicleService.getUserVehicle()
//
//  }
// $scope.fireFilter();




$scope.positionFilter = vehicleService.positionFilter;


$scope.addresses = vehicleService.addresses;




})
