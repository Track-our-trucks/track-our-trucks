angular.module('trackOurTruck').controller('adminCtrl', function($scope, $state, userService, vehicleService, adminService) {

  $scope.getUsers = function() {
    adminService.getUsers().then(function(response) {
      $scope.users = response.data
    })
  }

  $scope.getUsers()

  $scope.selected = -1;
  let flag = false;
  $scope.itemSelected = function(index){
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

  $scope.deleteUser = function(index){
    adminService.deleteUser($scope.users[index]).then(response => {
      $scope.getUsers();
    })
  }

  $scope.showUser = function(index){
    adminService.showUser($scope.users[index]).then(response => {
      $scope.theCurrentUser = response.data;
    })
  }

  $scope.updateUser = function(index){
    adminService.updateUser($scope.users[index]).then(response => {
      $scope.getUsers();
    })
  }

})
