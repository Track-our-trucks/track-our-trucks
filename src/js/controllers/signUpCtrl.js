angular.module('trackOurTruck').controller('signUpCtrl', function($auth, $scope, $state, userService) {

$scope.signUp = function(user){
  userService.signUp(user).then(function(response){
    $auth.setToken(response);
  })
}

})
