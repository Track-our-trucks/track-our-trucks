angular.module('trackOurTruck').controller('adminSignupCtrl', function($location, $scope, $auth, $state, adminService) {

$scope.signUp = function(admin){
  adminService.adminSignup(admin).then(function(response){
    $auth.setToken(response);
    $state.go('admin');
  })



}

})
