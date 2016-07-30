
angular.module('trackOurTruck').controller('vehicleInfoCtrl', function($scope, $state, vehicleService) {

  $scope.vehicle = vehicleService.theSelectedVehicle


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
     $state.go('userHome.behaviors')
   }
})
