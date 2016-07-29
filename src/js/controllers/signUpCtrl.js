angular.module('trackOurTruck').controller('signUpCtrl', ($auth, $scope, $state, userService) => {

$scope.signUp = user => {
  userService.signUp(user).then(
    response => {
      if (response.status === 200) {
        $auth.setToken(response);
        $state.go('userHome')
    }
  },
    response => {
      if (response.status === 409) {
        $scope.conflict = response.data.message;
      }
      else if (response.status === 412) {
        $scope.conflict = '';
        $scope.notANumber = response.data.message;
      }
      else if (response.status === 411) {
        $scope.conflict = '';
        $scope.notANumber = '';
        $scope.lengthOrPassword = response.data.message;
      }
  })
}

})
