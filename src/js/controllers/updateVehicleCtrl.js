angular.module('trackOurTruck').controller('updateVehicleCtrl', ($scope, $state, adminService, vehicleService) => {

  $scope.getVehicle = () => {
    vehicleService.getVehicle().then(response => {
      $scope.vehicle = response.data;
    })
  }
  $scope.getVehicle()

$scope.submitChanges = newVehicle => {
  vehicleService.updateVehicle(newVehicle).then(response => {
    if(response.status === 200){
      alert("succesfully updated vehicle!")
      $scope.getVehicle();
    }
    else {
      alert('you\'re a poopface!');
    }

  })
}

})
