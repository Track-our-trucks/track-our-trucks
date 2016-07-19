angular.module('trackOurTruck').controller('adminLoginCtrl', function($auth, $scope, $state, adminService) {

  $scope.login = function(admin) {
    adminService.adminLogin(admin).then(function(response) {
      $auth.setToken(response);
      $state.go('admin');

    })
  }

})
