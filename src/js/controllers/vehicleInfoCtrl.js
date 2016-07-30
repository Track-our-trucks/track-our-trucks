
angular.module('trackOurTruck').controller('vehicleInfoCtrl', function($scope, $state, vehicleService) {

  $scope.vehicle = vehicleService.theSelectedVehicle

  $scope.inputHidden = true;
  $scope.vehicleNameHidden = false;

  $scope.showInput = () => {
    $scope.inputHidden = false;
    $scope.vehicleNameHidden = true;
  }

  $scope.submit = (newName) => {
    vehicleService.updateVehicleByUser($scope.vehicle._id, newName).then(response => {
      vehicleService.theSelectedVehicle = response.data;
      $scope.vehicle = vehicleService.theSelectedVehicle;
    })
    $scope.inputHidden = true;
    $scope.vehicleNameHidden = false;
  }

  $scope.cancel = () => {
    $scope.inputHidden = true;
    $scope.vehicleNameHidden = false;
    $scope.newVehicleName = "";
  }

  $scope.tab = 1;

  $scope.theDate = new Date();

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };

   $scope.goToLocation = function() {
     $state.go('userHome.vehicleInfo.location')
   }

   $scope.goToBehaviors = function() {
     $state.go('userHome.vehicleInfo.behaviors')
   }
})
