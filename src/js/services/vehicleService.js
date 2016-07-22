angular.module('trackOurTruck').service('vehicleService', function($http, $q){

  this.currentUser;


  this.addVehicle = function(vehicle){
    return $http({
      method: "POST",
      url: '/api/addvehicle' + this.currentUser._id
    })
  }


  this.getAddress = (pos) => {
    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.pos[0]+','+pos.pos[1]+'&key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns'
    })
  }
})
