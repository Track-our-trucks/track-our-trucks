angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };
})
