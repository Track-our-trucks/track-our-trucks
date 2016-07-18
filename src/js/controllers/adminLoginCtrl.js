angular.module('trackOurTruck').controller('adminLoginCtr', function($scope, $state, adminService) {

  $scope.login = function(admin) {
    adminService.adminLogin(admin).then(function(response) {
      console.log(response.data);
    })
  }

})
