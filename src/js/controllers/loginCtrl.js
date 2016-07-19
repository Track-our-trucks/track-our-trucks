angular.module('trackOurTruck').controller('loginCtrl', ($auth, $scope, $state, userService) => {

  $scope.login = (user) => {
    userService.login(user).then(response => {
      $auth.setToken(response);
    })
  }

})
