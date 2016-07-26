angular.module('trackOurTruck').controller('adminCtrl', ($scope, $state, userService, vehicleService, adminService) => {

  // $scope.newUserInputsHidden = true;
  // let flag = false;
  // $scope.newUser = () => {
  //   $scope.newUserInputsHidden = false;
  // }
  $scope.modalOff = () => {

      $state.go('admin');

      $scope.thinModalOn = false;
      // body.style.overflow="";
      // html.style.overflow="";

  }

  $scope.adminNewUserModal = () => {

    $state.go('admin.newUser');

    $scope.thinModalOn = true;

    // body.style.overflow="hidden";
    // html.style.overflow="hidden";

  }

  $scope.addUser = (newUser) => {
    console.log(newUser);
    userService.signUp(newUser).then(response => {

      if (response.status === 200) {
        alert('user added successfully!')
      }
      $scope.getUsers();
    })
  }

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
      adminService.selectedUser = $scope.users[index];
      vehicleService.selectedUser = $scope.users[index];
      userService.selectedUser = $scope.users[index];
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
    adminService.selectedUser = $scope.users[index]
      $state.go('showUser')

  }

  $scope.updateUser = (index) => {
    adminService.selectedUser = $scope.users[index]
      $state.go('updateUser')
  }

})
