angular.module('trackOurTruck').service('vehicleService', function($http, $q){

  this.currentUser;


  this.addVehicle = function(vehicle){
    return $http({
      method: "POST",
      url: '/api/addvehicle' + this.currentUser._id
    })
  }

})
