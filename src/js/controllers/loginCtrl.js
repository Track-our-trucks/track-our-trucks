angular.module('trackOurTruck').controller('loginCtrl', function($auth, $scope, $state, userService) {

  $scope.login = function(user) {
    userService.login(user).then(function(response) {
      $auth.setToken(response);
    })
  }

})
