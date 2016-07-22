angular.module('trackOurTruck').controller('userHomeCtrl', ($auth, $scope, $state, $interval, $rootScope, userService) => {

  var payload = () => {
    var payloadData = $auth.getPayload()
    return payloadData.sub
  }

  $scope.getUser = () => {
      userService.getUser(payload()).then(response => {
        console.log(response);
        userService.currentUser = response.data;
      })
    }

    $scope.getUser()

  $scope.time;

  $scope.timer = () => {
    $scope.time = $interval( () => {
      $scope.getUser();
    }, 10000)
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

  $scope.modalOff = () => {

      $scope.getUser();

      $state.go('userHome');

      $scope.wideModalOn = false;


  }

  $scope.vehicleModal = () => {

    $scope.getUser();

    $state.go('userHome.vehicleInfo');

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

})
