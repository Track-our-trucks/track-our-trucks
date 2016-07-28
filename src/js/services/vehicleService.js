angular.module('trackOurTruck').service('vehicleService', function($http, $q, $interval, $auth, $rootScope, userService, $state){

  this.currentUser;
  this.selectedUser;
  this.selectedVehicle;

  this.addVehicle = vehicle => {
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

  this.getAddress = pos => {
    return $http({
      method: 'GET',
      skipAuthorization: true,
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.pos[0]+','+pos.pos[1]+'&key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns'
    })
  }

  this.getVehicle = () => {
    return $http({
      method: "GET",
      url: '/api/getonevehicle/' + this.selectedUser._id
    })
  }

  this.deleteVehicle = (vehicleId, userId) => {
    return $http({
      method: "DELETE",
      url: '/api/deletevehicle/' + vehicleId + '/' + userId
    })
  }

  this.updateVehicle = (vehicle, userId)  => {
    return $http({
      method: "PUT",
      url: '/api/updatevehicle/' + this.currentVehicleId,
      data: vehicle
    })
  }



})
