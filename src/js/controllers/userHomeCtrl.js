angular.module('trackOurTruck').controller('userHomeCtrl', ($scope, $state, $interval, $rootScope, userService) => {

  $scope.getUser = () => {
      userService.getUser().then(response => {
        userService.currentUser = response.data;
        console.log(userService.currentUser);
      })
    }

  $scope.time;

  $scope.timer = () => {
    $scope.time = $interval( () => {
      $scope.getUser();
      console.log('hello');
    }, 10000)
  }

  $scope.timer()

  $scope.stopTimer = () => {
    $interval.cancel($scope.time)
    $scope.time = undefined;
  }

  $rootScope.$on('$stateChangeSuccess', () => {
    console.log('state changed... yay');
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

})
