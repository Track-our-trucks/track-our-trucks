angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state, vehicleService) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };



$scope.fireFilter =  () => {

 vehicleService.theDate = $scope.theDate;
 vehicleService.fireFilter();
 $scope.directions = vehicleService.directions;
 $scope.pins = vehicleService.pins;

 console.log("pins " + $scope.pins);

 $scope.lines = vehicleService.lines;

 console.log("lines " + $scope.lines);

 $scope.center = $scope.lines[0];
 }

$scope.fireFilter();


$scope.positionFilter = vehicleService.positionFilter;




$scope.addresses = vehicleService.addresses;




})
