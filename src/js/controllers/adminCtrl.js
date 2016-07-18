angular.module('trackOurTruck').controller('loginCtrl', function($scope, $state, userService, vehicleService, adminService) {

  $scope.getUsers = function() {
    userService.getUsers().then(function(response) {
      $scope.users = response.data
    })
  }

  $scope.getUsers()

})
