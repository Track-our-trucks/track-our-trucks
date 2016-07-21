angular.module('trackOurTruck').controller('loginCtrl', ($auth, $scope, $state, userService) => {

  $scope.login = (user) => {
    userService.login(user).then(response => {
      $auth.setToken(response);
      console.log(response);
      if (response.status === 200) {
        userService.currentUser = response.data.user;
        $state.go('userHome')
      }
    })
  }

})
