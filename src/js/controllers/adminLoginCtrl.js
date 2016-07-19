angular.module('trackOurTruck').controller('adminLoginCtrl', ($auth, $scope, $state, adminService) => {

  $scope.login = (admin) => {
    adminService.adminLogin(admin).then(response => {
      $auth.setToken(response);
      $state.go('admin');

    })
  }

})
