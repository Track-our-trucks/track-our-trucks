angular.module('trackOurTruck').controller('userHomeCtrl', ($auth, $scope, $state, $interval, $rootScope, userService, vehicleService) => {


$scope.loadingHidden = false;


  var payload = () => {
    var payloadData = $auth.getPayload()
    return payloadData.sub
  }



  $scope.getUser = () => {
      userService.getUser(payload()).then(response => {
        $scope.theUser = response.data;
        userService.currentUser = response.data;
        $scope.getVehicleList();
      })
    }

    $scope.getUser()

  $scope.time;

  $scope.timer = () => {
    $scope.time = $interval( () => {
      $scope.getUser();

    }, 600000)
  }

  $scope.timer()

  $scope.stopTimer = () => {
    $interval.cancel($scope.time)
    $scope.time = undefined;
  }

  $rootScope.$on('$stateChangeSuccess', () => {
    if ($state.current.name !== 'userHome') {
      $scope.stopTimer();
    } else {
    $scope.timer();
  }
  })

  //fake data

  //
  // var fakeData = [
  //
  //
  //   {"fixTime":1469734913000,"lat":40.2271,"long":-111.659,"speed":18,"heading":234,"event":9,"address":"2-48 W 500 S, Provo, UT 84601, USA"},
  //   {"fixTime":1469734928000,"lat":40.2269,"long":-111.6606,"speed":13,"heading":193,"event":9,"address":"522 S 100 W St, Provo, UT 84601, USA"},
  //   {"fixTime":1469734949000,"lat":40.2258,"long":-111.6607,"speed":11,"heading":260,"event":9,"address":"108 600 S, Provo, UT 84601, USA"},
  //   {"fixTime":1469734948000,"lat":40.2258,"long":-111.6606,"speed":8,"heading":219,"event":9,"address":"108 600 S, Provo, UT 84601, USA"},
  //   {"fixTime":1469734952000,"lat":40.2258,"long":-111.6609,"speed":8,"heading":301,"event":9,"address":"108 600 S, Provo, UT 84601, USA"},
  //   {"fixTime":1469734968000,"lat":40.2259,"long":-111.6609,"speed":0,"heading":315,"event":12,"address":"108 600 S, Provo, UT 84601, USA"}
  // ]

  //getting the list of vehicles to show on the userHome page

  $scope.getVehicleList = () => {
    var payloadData = $auth.getPayload()
    userService.getUser(payloadData.sub).then(response => {
       $scope.vehicleArr = response.data.vehicles;

       $scope.getCurrentLocations();

    })
  }
  $scope.getVehicleList();


  $scope.getCurrentLocations = () => {

    $scope.loadingHidden = true;
      var tmpArr = [];

      for (var i = 0; i < $scope.vehicleArr.length; i++) {

        tmpArr.push([
          $scope.vehicleArr[i].timeDistanceProfiles[$scope.vehicleArr[i].timeDistanceProfiles.length-1].lat,
          $scope.vehicleArr[i].timeDistanceProfiles[$scope.vehicleArr[i].timeDistanceProfiles.length-1].long
        ])


      }

      $scope.currentLocations = tmpArr;



  }

  $scope.modalOff = () => {

      $scope.getUser();

      $state.go('userHome');

      $scope.wideModalOn = false;


  }

  $scope.vehicleModal = selectedVehicle => {

    vehicleService.theSelectedVehicle = $scope.vehicleArr[selectedVehicle]

    vehicleService.selectedVehicle = selectedVehicle;

    $scope.getUser();

    $state.go('userHome.vehicleInfo.location');

    $scope.wideModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

  $scope.userInfo = () => {

    $scope.getUser();

    $state.go('userHome.userInfo');

    $scope.wideModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }
    $scope.userLogOut = () => {
      $auth.logout();
      $state.go("welcome");
    }

    $scope.showDesc = (event, index, pin) => {

       $scope.choiceOn = true;
       $scope.choiceCenter = pin;

    }

    $scope.choiceOff= () => {

      $scope.choiceOn = false;
    }
  })
