angular.module('trackOurTruck').controller('showUserCtrl', ($scope, $state, adminService, vehicleService) => {
$scope.getSelectedUser = () => {
  adminService.showUser(adminService.selectedUser).then(response => {
    $scope.selectedUser = response.data;
    vehicleService.selectedUser = $scope.selectedUser;
    $scope.vehicles = $scope.selectedUser.vehicles;
})
}
$scope.getSelectedUser();

$scope.addVehicle = vehicle => {
  vehicleService.addVehicle(vehicle).then(response => {
    $scope.getSelectedUser();

  })
}

$scope.selected = -1;
let flag = false;
$scope.itemSelected = index => {
  if(!flag){
    $scope.selected = index;

    flag = true;
  }
  else {
    $scope.selected = -1;
    flag = false;
  }

}

$scope.deleteVehicle = index => {
  vehicleService.deleteVehicle($scope.vehicles[index]._id, $scope.selectedUser._id).then(response => {
    if(response.status === 200){
      alert('vehicle deleted successfully!');
      $scope.getSelectedUser();
    }
    else {
      alert('you\'re a poopface!');
    }

  })
}

$scope.updateVehicle = index => {
  vehicleService.currentVehicleId = $scope.vehicles[index]._id;
  $state.go('updateVehicle')
}

})
