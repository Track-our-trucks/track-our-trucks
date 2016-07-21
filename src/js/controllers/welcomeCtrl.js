angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state) => {

  $scope.modalOff = () => {

      $state.go('welcome.globe');

      $scope.thinModalOn = false;


  }

  $scope.signupModal = () => {

    $state.go('welcome.signup');

    $scope.thinModalOn = true;

    let body = document.getElementById('body');

    body.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('welcome.login');

  $scope.thinModalOn = true;

  let body = document.getElementById('body');

  body.style.overflow="hidden";

}

$scope.globe = () =>{

  $state.go('welcome.globe');

}

$scope.marker = () =>{

  $state.go('welcome.marker');

}

$scope.truck = () =>{

  $state.go('welcome.truck');

}

$scope.clock = () =>{

  $state.go('welcome.clock');

}

$scope.speed = () =>{

  $state.go('welcome.speed');

}

$scope.calender = () =>{

  $state.go('welcome.calender');

}

})
