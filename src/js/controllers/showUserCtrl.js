angular.module('trackOurTruck').controller('showUserCtrl', function($scope, $state, adminService, vehicleService){
$scope.getSelectedUser = () => {
  adminService.showUser(adminService.selectedUser).then(response => {
    $scope.selectedUser = response.data;
    vehicleService.selectedUser = $scope.selectedUser;
    $scope.vehicles = $scope.selectedUser.vehicles;
})
}
$scope.getSelectedUser();

$scope.addVehicle = (vehicle) => {
  vehicleService.addVehicle(vehicle).then(response => {
    $scope.getSelectedUser();

  })
}

$scope.selected = -1;
let flag = false;
$scope.itemSelected = (index) => {
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

}

$scope.updateVehicle = index => {
  $state.go('updateVehicle')
}

})
