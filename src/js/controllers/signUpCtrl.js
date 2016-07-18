angular.module('trackOurTruck').controller('signUpCtrl', function($scope, $state, userService) {

$scope.signUp = function(user){
  userService.signUp(user).then(function(response){
    
  })
}

})
