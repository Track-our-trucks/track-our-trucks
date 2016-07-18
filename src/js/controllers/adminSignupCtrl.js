angular.module('trackOurTruck').controller('signUpCtrl', function($scope, $state, adminService) {

$scope.signUp = function(admin){
  adminService.adminSignup(admin).then(function(response){

  })
}

})
