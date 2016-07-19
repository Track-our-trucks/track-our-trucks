angular.module('trackOurTruck').controller('adminSignupCtrl', ($location, $scope, $auth, $state, adminService) => {

$scope.signUp = (admin) => {
  adminService.adminSignup(admin).then(response => {
    $auth.setToken(response);
    $state.go('admin');
  })



}

})
