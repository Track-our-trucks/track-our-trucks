angular.module('trackOurTruck').controller('vehicleCtrl', ($scope, $state, $rootScope, vehicleService, $interval) => {
  $scope.tab = 0;

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };



   var vehicleTime;

     var vehicleTimer = () => {
       vehicleTime = $interval( () => {
         $scope.fireFilter();
       }, 10000)
     }

   var vehicleStopTimer = () => {
     $interval.cancel(vehicleTime)
     vehicleTime = undefined;
   }

   $rootScope.$on('$stateChangeSuccess', () => {
      if ($state.current.name === 'userHome.vehicleInfo.location') {
        vehicleTimer();
      } else {
      vehicleStopTimer();
    }
    })



 $scope.fireFilter = () => {

   vehicleService.theDate = $scope.theDate;
   // vehicleService.fireFilter();
   $scope.directions = vehicleService.directions;
   $scope.pins = vehicleService.pins;

   $scope.lines = vehicleService.lines;

   $scope.center = $scope.lines[0];


   vehicleService.getUserVehicle()

 }
$scope.fireFilter();




$scope.positionFilter = vehicleService.positionFilter;


$scope.addresses = vehicleService.addresses;




})
