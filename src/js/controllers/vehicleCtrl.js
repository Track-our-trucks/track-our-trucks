angular.module('trackOurTruck').controller('vehicleCtrl', ($scope, $auth, $state, $rootScope, vehicleService, $interval, userService) => {


//FAKE DATE
// var fakeData = [
//
//
// {"fixTime":1469716046000,"lat":40.5301,"long":-111.9102,"speed":21,"heading":143,"event":9},
// {"fixTime":1469716082000,"lat":40.5269,"long":-111.9067,"speed":21,"heading":187,"event":9},
// {"fixTime":1469716092000,"lat":40.5268,"long":-111.908,"speed":14,"heading":270,"event":9},
// {"fixTime":1469716120000,"lat":40.5268,"long":-111.9081,"speed":7,"heading":160,"event":9},
// {"fixTime":1469716130000,"lat":40.5267,"long":-111.907,"speed":30,"heading":88,"event":9},
// {"fixTime":1469716208000,"lat":40.5265,"long":-111.892,"speed":22,"heading":129,"event":9},
// {"fixTime":1469716218000,"lat":40.5252,"long":-111.8917,"speed":42,"heading":171,"event":9},
// {"fixTime":1469716330000,"lat":40.4963,"long":-111.8913,"speed":66,"heading":180,"event":8},
// {"fixTime":1469716452000,"lat":40.4674,"long":-111.9115,"speed":71,"heading":208,"event":8},
// {"fixTime":1469716510000,"lat":40.4512,"long":-111.9134,"speed":72,"heading":167,"event":9},
// {"fixTime":1469716634000,"lat":40.4223,"long":-111.8812,"speed":81,"heading":138,"event":8},
// {"fixTime":1469716757000,"lat":40.3972,"long":-111.8433,"speed":78,"heading":125,"event":8},
// {"fixTime":1469716884000,"lat":40.3724,"long":-111.8055,"speed":78,"heading":110,"event":8},
// {"fixTime":1469717002000,"lat":40.349,"long":-111.7676,"speed":75,"heading":130,"event":8},
// {"fixTime":1469717124000,"lat":40.3246,"long":-111.7297,"speed":70,"heading":136,"event":8},
// {"fixTime":1469717149000,"lat":40.3181,"long":-111.7262,"speed":74,"heading":177,"event":9},
// {"fixTime":1469717241000,"lat":40.2893,"long":-111.7258,"speed":78,"heading":179,"event":8},
// {"fixTime":1469717403000,"lat":40.2462,"long":-111.6956,"speed":73,"heading":179,"event":8},
// {"fixTime":1469717469000,"lat":40.2317,"long":-111.6835,"speed":47,"heading":138,"event":9},
// {"fixTime":1469717479000,"lat":40.2313,"long":-111.6811,"speed":49,"heading":71,"event":9},
// {"fixTime":1469717565000,"lat":40.2336,"long":-111.6676,"speed":15,"heading":115,"event":9},
// {"fixTime":1469717575000,"lat":40.2324,"long":-111.6675,"speed":34,"heading":179,"event":9},
// {"fixTime":1469717623000,"lat":40.2271,"long":-111.6674,"speed":17,"heading":138,"event":9},
// {"fixTime":1469717633000,"lat":40.2271,"long":-111.6661,"speed":29,"heading":89,"event":9},
// {"fixTime":1469717692000,"lat":40.227,"long":-111.6606,"speed":16,"heading":132,"event":9},
// {"fixTime":1469717703000,"lat":40.2263,"long":-111.6605,"speed":13,"heading":182,"event":9},
// {"fixTime":1469717731000,"lat":40.2262,"long":-111.6604,"speed":0,"heading":118,"event":12},
// {"fixTime":1469719073000,"lat":40.2271,"long":-111.6589,"speed":17,"heading":219,"event":9},
// {"fixTime":1469719075000,"lat":40.2271,"long":-111.6592,"speed":21,"heading":260,"event":9},
// {"fixTime":1469719087000,"lat":40.227,"long":-111.6605,"speed":15,"heading":219,"event":9},
// {"fixTime":1469719090000,"lat":40.2268,"long":-111.6606,"speed":17,"heading":178,"event":9},
// {"fixTime":1469719105000,"lat":40.2259,"long":-111.6606,"speed":9,"heading":223,"event":9},
// {"fixTime":1469719108000,"lat":40.2259,"long":-111.6607,"speed":6,"heading":264,"event":9},
// {"fixTime":1469719126000,"lat":40.226,"long":-111.6608,"speed":0,"heading":271,"event":12}
// ]










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

    var positionFilter = theDayPins => {

      var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
      var newCompass;
      $scope.directions = [];
      var newPos = [];
      var newPin = [];
      var newLine = [];
      $scope.center = [theDayPins[theDayPins.length - 1].lat, theDayPins[theDayPins.length - 1].long]
      for (let i = 0; i < theDayPins.length; i++) {

          var posObj = {
            pos:[theDayPins[i].lat, theDayPins[i].long]
          };
          newPin.push(posObj.pos);

          newLine.push([theDayPins[i].lat, theDayPins[i].long]);


          var val = Math.floor((theDayPins[i].heading / 22.5) + 0.5);
          newCompass =  compass[(val % 16)];


          $scope.directions.push(newCompass);




            var addressWithTime = {
              address: theDayPins[i].address,
              time: new Date(theDayPins[i].fixTime)
            }

            newPos.push(addressWithTime);



      }

            $scope.addresses = newPos;




            $scope.pins = newPin;


            $scope.lines = newLine;


    }


    var filter = tracker => {

      var theFilterer = val => {
        var test1 = (new Date(val.fixTime)).toDateString();
        var test2 = (new Date($scope.theDate)).toDateString();
       return  test1 === test2;
      }

    let theDayPins = tracker.filter(theFilterer);




     positionFilter(theDayPins);

    }


    // var testcounter = 1; //FAKE DATA
    $scope.getUserVehicle = () => {
      var payloadData = $auth.getPayload() //REAL DATA
      userService.getUser(payloadData.sub).then(response => { //REAL DATA
         let vehicleArr = response.data.vehicles; //REAL DATA
         let tracker = vehicleArr[0].timeDistanceProfiles; //REAL DATA
         filter(tracker);
      })
      // fakeDataDisplay = fakeData.slice(0, testcounter++)//FAKE DATA
      // filter(fakeDataDisplay)//FAKE DATA
    }
    $scope.getUserVehicle();














})
