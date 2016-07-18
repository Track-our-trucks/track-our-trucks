angular.module('trackOurTruck').controller('loginCtrl', function($scope, $state, userService) {

  $scope.login = function(user) {
    userService.login(user).then(function(response) {
      console.log(response.data);
    })
  }

})
