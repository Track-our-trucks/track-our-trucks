angular.module('trackOurTruck').controller('adminCtrl', ($scope, $state, userService, vehicleService, adminService) => {

  $scope.getUsers = () => {
    adminService.getUsers().then((response) => {
      $scope.users = response.data
    })
  }

  $scope.getUsers()

  $scope.selected = -1;
  let flag = false;
  $scope.itemSelected = (index) => {
    if(!flag){
      $scope.selected = index;
      adminService.currentUser = $scope.users[index];
      vehicleService.currentUser = $scope.users[index];
      userService.currentUser = $scope.users[index];
      flag = true;
    }
    else {
      $scope.selected = -1;
      flag = false;
    }

  }

  $scope.deleteUser = (index) => {
    adminService.deleteUser($scope.users[index]).then(response => {
      $scope.getUsers();
    })
  }

  $scope.showUser = (index) => {
    adminService.showUser($scope.users[index]).then(response => {
      $scope.theCurrentUser = response.data;
    })
  }

  $scope.updateUser = (index) => {
    adminService.updateUser($scope.users[index]).then(response => {
      $scope.getUsers();
    })
  }

})
