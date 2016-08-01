angular.module('trackOurTruck').controller('signUpCtrl', ($auth, $scope, $state, userService) => {

$scope.signUp = user => {
  userService.signUp(user).then(
    response => {
      if (response.status === 200) {
        $scope.errorMessage = '';
        $auth.setToken(response);
        $state.go('userHome')
    }
  },
    response => {
      if (response.status === 409) {
        $scope.errorMessage = response.data.message;
      }
      else if (response.status === 412) {
        $scope.errorMessage = response.data.message;
      }
      else if (response.status === 411) {
        $scope.errorMessage = response.data.message;
      }
  })
}

})
