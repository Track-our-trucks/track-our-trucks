angular.module('trackOurTruck').service('vehicleService', function($http, $q){

  this.currentUser;
  this.selectedUser;


  this.addVehicle = function(vehicle){
    return $http({
      method: "POST",
      url: '/api/addvehicle/' + this.selectedUser._id,
      data: vehicle
    })
  }

  this.getvehicles = () => {
    return $http({
      method: "GET",
      url: '/api/getvehicles'
    })
  }

  this.getAddress = (pos) => {
    return $http({
      method: 'GET',
      skipAuthorization: true,
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.pos[0]+','+pos.pos[1]+'&key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns'
    })
  }
})
