angular.module('trackOurTruck').service('vehicleService', function($http, $q){

  this.currentUser;
  this.selectedUser;
  this.currentVehicleId;

  this.addVehicle = vehicle => {
    return $http({
      method: "POST",
      url: '/api/addvehicle/' + this.selectedUser._id,
      data: vehicle
    })
  }

  this.getVehicle = () => {
    return $http({
      method: "GET",
      url: '/api/getonevehicle/' + this.currentVehicleId
    })
  }

  this.updateVehicle = (newVehicle) => {
    return $http({
      method: "PUT",
      url: '/api/updatevehicle/' + this.currentVehicleId,
      data: newVehicle
    })
  }

  this.getvehicles = () => {
    return $http({
      method: "GET",
      url: '/api/getvehicles'
    })
  }

  this.deleteVehicle = (vehicleId) => {
    return $http({
      method: "DELETE",
      url: '/api/deletevehicle/' + vehicleId
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
