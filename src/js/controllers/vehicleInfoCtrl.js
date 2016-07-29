angular.module('trackOurTruck').controller('vehicleInfoCtrl', function($scope, $state) {
  
  $scope.tab = 1;

  $scope.theDate = new Date();

  $scope.setTab = newTab => {
    $scope.tab = newTab;
  };

   $scope.isSet = tabNum => {
     return $scope.tab === tabNum;
   };



})
