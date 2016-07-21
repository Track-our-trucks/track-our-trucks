angular.module('trackOurTruck').controller('signUpCtrl', ($auth, $scope, $state, userService) => {

$scope.signUp = (user) => {
  userService.signUp(user).then(response => {
    $auth.setToken(response);
    if (response.status === 200) {
      $state.go('userHome')
    }
  })
}

})
