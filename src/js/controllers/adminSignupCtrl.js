angular.module('trackOurTruck').controller('adminSignupCtrl', function($scope, $state, adminService) {

$scope.signUp = function(admin){
  adminService.adminSignup(admin).then(function(response){

  })
}

})