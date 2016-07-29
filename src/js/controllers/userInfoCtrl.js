angular.module('trackOurTruck').controller('userInfoCtrl', ($scope, $state) => {

  $scope.showProfile = function(){
    $state.go("userHome.userInfo.info");
  }

  $scope.showProfile();
})
