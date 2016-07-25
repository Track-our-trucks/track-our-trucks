angular.module('trackOurTruck').controller('updateUserCtrl', function($scope, $state, adminService){
$scope.getSelectedUser = () => {
  adminService.showUser(adminService.selectedUser).then(response => {
    $scope.selectedUser = response.data;



    $scope.updateUser = () => {
      let newUser = {
        name: $scope.name,
        phoneNumber: $scope.phoneNumber,
        email: $scope.email,
        password: $scope.password,
        _id: $scope.selectedUser._id
      }
    
      adminService.updateUser(newUser).then(response => {
        if(response.status === 200){
          alert('User updated successfully!')
          $state.go('admin');
        }
        else {
          alert('Error')
        }
      })
    }

})
}
$scope.getSelectedUser();




})
