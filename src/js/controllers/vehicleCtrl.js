angular.module('trackOurTruck').controller('vehicleCtrl', ($scope, $state, vehicleService, $interval) => {
  $scope.tab = 0;

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };

$scope.fireFilter =  () => {

vehicleService.getUserVehicle()

 vehicleService.theDate = $scope.theDate;
 vehicleService.fireFilter();
 $scope.directions = vehicleService.directions;
 $scope.pins = vehicleService.pins;

 $scope.lines = vehicleService.lines;

 $scope.center = $scope.lines[0];
 }


$scope.fireFilter();


$scope.positionFilter = vehicleService.positionFilter;


$scope.addresses = vehicleService.addresses;




})
