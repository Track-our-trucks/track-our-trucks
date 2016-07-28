angular.module('trackOurTruck').controller('adminLoginCtrl', ($auth, $scope, $state, adminService) => {

  $scope.login = admin => {
    adminService.adminLogin(admin).then(
      response => {
        if (response.status === 200) {
          $auth.setToken(response);
          $state.go('userHome')
        }
      },
      response => {
        if (response.status === 401) {
          alert(response.data.message)
        }
      })
  }

})
