angular.module('trackOurTruck').controller('loginCtrl', ($auth, $scope, $state, userService) => {

  

  $scope.login = user => {


    userService.login(user).then(
      response => {
        $scope.errorMessage = '';
        if (response.status === 200) {
          $auth.setToken(response);
          $state.go('userHome')
        }
    },
      response => {
        if (response.status === 401) {
          $scope.errorMessage = response.data.message;
          $scope.user.password = '';
        }
  })

}

})
