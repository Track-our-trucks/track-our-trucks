angular.module('trackOurTruck').controller('welcomeCtrl', ($scope, $state, $document) => {

  let body = $document.find('body')[0];
  let html = $document.find('html')[0];

  $scope.modalOff = () => {

      $state.go('welcome.globe');

      $scope.thinModalOn = false;
      body.style.overflow="";
      html.style.overflow="";

  }

  $scope.signupModal = () => {

    $state.go('welcome.signup');

    $scope.thinModalOn = true;

    body.style.overflow="hidden";
    html.style.overflow="hidden";

  }

$scope.loginModal = () => {

  $state.go('welcome.login');

  $scope.thinModalOn = true;


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
