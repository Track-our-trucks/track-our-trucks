angular.module('trackOurTruck').controller('updateVehicleCtrl', ($scope, $state, adminService, vehicleService) => {

  $scope.getVehicle = () => {
    vehicleService.updateVehicle().then(response => {
      $scope.vehicle = response.data;
    })
  }
  $scope.getVehicle()

  

})
