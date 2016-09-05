angular.module('trackOurTruck').controller('vehicleCtrl', ($filter, $scope, $auth, $state, $rootScope, vehicleService, $interval, userService) => {

$scope.loadingHiddenVehicle = false;
    //FAKE DATE

    // var fakeData = [
    //
    //
    //     {
    //         "fixTime": 1469734913000,
    //         "lat": 40.2271,
    //         "long": -111.659,
    //         "speed": 18,
    //         "heading": 234,
    //         "event": 9,
    //         "address": "2-48 W 500 S, Provo, UT 84601, USA"
    //     }, {
    //         "fixTime": 1469734928000,
    //         "lat": 40.2269,
    //         "long": -111.6606,
    //         "speed": 13,
    //         "heading": 193,
    //         "event": 9,
    //         "address": "522 S 100 W St, Provo, UT 84601, USA"
    //     }, {
    //         "fixTime": 1469734949000,
    //         "lat": 40.2258,
    //         "long": -111.6607,
    //         "speed": 11,
    //         "heading": 260,
    //         "event": 9,
    //         "address": "108 600 S, Provo, UT 84601, USA"
    //     }, {
    //         "fixTime": 1469734948000,
    //         "lat": 40.2258,
    //         "long": -111.6606,
    //         "speed": 8,
    //         "heading": 219,
    //         "event": 9,
    //         "address": "108 600 S, Provo, UT 84601, USA"
    //     }, {
    //         "fixTime": 1469734952000,
    //         "lat": 40.2258,
    //         "long": -111.6609,
    //         "speed": 8,
    //         "heading": 301,
    //         "event": 9,
    //         "address": "108 600 S, Provo, UT 84601, USA"
    //     }, {
    //         "fixTime": 1469734968000,
    //         "lat": 40.2259,
    //         "long": -111.6609,
    //         "speed": 0,
    //         "heading": 315,
    //         "event": 12,
    //         "address": "108 600 S, Provo, UT 84601, USA"
    //     }
    // ]







    $scope.timeFilterShow = false;
    $scope.timeFilterHidden = true;
    var flag = false;
    $scope.showTimeFilter = () => {
      if(!flag){
        $scope.timeFilterHidden = false;
        $scope.timeFilterShow = true;
        flag = true;
      }
      else {
        $scope.timeFilterHidden = true;
        $scope.timeFilterShow = false;
        flag = false;
      }

    }



    $scope.tab = 1;

    $scope.theDate = (new Date()).toDateString();

    $scope.setTab = newTab => {
        $scope.tab = newTab;
    };

    $scope.isSet = tabNum => {
        return $scope.tab === tabNum;
    };



    $scope.vehicleTime;



    var vehicleTimer = () => {
        $scope.vehicleTime = $interval(() => {
            $scope.getUserVehicle();
        }, 600000)
    }

    var vehicleStopTimer = () => {
        $interval.cancel($scope.vehicleTime)
        $scope.vehicleTime = undefined;
    }


    vehicleTimer()

    $rootScope.$on('$stateChangeSuccess', () => {

        vehicleStopTimer();

    })

    var positionFilter = theDayPins => {

        var compass = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        var newCompass;
        $scope.directions = [];
        var newPos = [];
        var newPin = [];
        var newLine = [];
        if (theDayPins.length >= 1) {
            $scope.noData = '';
            $scope.center = [theDayPins[theDayPins.length - 1].lat, theDayPins[theDayPins.length - 1].long]
            for (let i = 0; i < theDayPins.length; i++) {

                var posObj = {
                    pos: [theDayPins[i].lat, theDayPins[i].long]
                };
                newPin.push(posObj.pos);

                newLine.push([theDayPins[i].lat, theDayPins[i].long]);

                var val = Math.floor((theDayPins[i].heading / 22.5) + 0.5);
                newCompass = compass[(val % 16)];

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

            $scope.dayLocations = theDayPins;
            $scope.loadingHiddenVehicle = true;

      }
      else {
        $scope.noData = 'no driving data for selected day';
      }
    }

    var filter = tracker => {

        var dateFilter = val => {
            var test1 = (new Date(val.fixTime)).toDateString();
            var test2 = (new Date($scope.theDate)).toDateString();
            return test1 === test2;
        }

        var timeFilter = val => {
            let arrayVal = ((new Date(val.fixTime)).getHours()*60) + (new Date(val.fixTime)).getMinutes()
            let fromTime = ((new Date($scope.timeFrom)).getHours()*60) + (new Date($scope.timeFrom)).getMinutes()
            let toTime = ((new Date($scope.timeTo)).getHours()*60) + (new Date($scope.timeTo)).getMinutes()
            return arrayVal >= fromTime  && arrayVal <= toTime
        }

        let dateFilteredArray = tracker.filter(dateFilter);

        var theDayPins = dateFilteredArray;

        if ($scope.timeFrom && $scope.timeTo) {
          $scope.showHidden = true;
          $scope.resetHidden = false;
          vehicleStopTimer();
          var theDayPins = dateFilteredArray.filter(timeFilter)
        }
        else if ((new Date($scope.theDate)).toDateString() !== (new Date()).toDateString()){
          vehicleStopTimer();
        }


        positionFilter(theDayPins);

    }

    $scope.resetTime = () => {
      $scope.timeTo = '';
      $scope.timeFrom = '';
        $scope.showHidden = false;
        $scope.resetHidden = true;
        $scope.getUserVehicle();
    }

    $scope.selectedVehicle = vehicleService.selectedVehicle;

    // var testcounter = 1; //FAKE DATA
    $scope.getUserVehicle = () => {
        if ((new Date($scope.theDate)).toDateString() !== (new Date()).toDateString()) {
            vehicleStopTimer();
        } else {
            vehicleStopTimer();
            vehicleTimer();
        }
        $scope.addresses = [];
        $scope.pins = [];
        var payloadData = $auth.getPayload() //REAL DATA
        userService.getUser(payloadData.sub).then(response => { //REAL DATA
           let vehicleArr = response.data.vehicles; //REAL DATA
           let tracker = vehicleArr[$scope.selectedVehicle].timeDistanceProfiles; //REAL DATA
           filter(tracker); //real data
        }) //real data
        // fakeDataDisplay = fakeData.slice(0, testcounter++) //FAKE DATA
        // filter(fakeDataDisplay) //FAKE DATA
    }
    $scope.getUserVehicle();




    $scope.showDesc = (event, index, pin, dayLocations) => {

       $scope.choiceOn = true;
       $scope.choiceInfo = dayLocations[index];
       $scope.theTime = $filter('date')(new Date(dayLocations[index].fixTime), 'shortTime')
       $scope.choiceCenter = pin;

      var compass = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];


      var val = Math.floor(($scope.choiceInfo.heading / 22.5) + 0.5);
      $scope.choiceHeading = compass[(val % 16)];




    }

    $scope.choiceOff= () => {

      $scope.choiceOn = false;
    }


})
