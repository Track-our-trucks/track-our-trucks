angular.module('trackOurTruck').service('adminService', function($http, $q){

  this.currentUser;

  this.getUsers = function(){
    return $http({
      method: "GET",
      url: '/api/getusers'
    })
  }

  this.deleteUser = function(user){
    return $http({
      method: "DELETE",
      url: '/api/deleteuser/' + user._id
    })
  }

  this.showUser = function(user){
    return $http({
      method: "GET",
      url: '/api/getoneuser/' + user._id
    })
  }

  this.updateUser = function(user){
    return $http({
      method: "PUT",
      url: '/api/updateuser/' + user._id,
      data: user
    })
  }

  this.adminLogin = function(admin){
    return $http({
      method: "POST",
      url: '/auth/adminlogin',
      data: admin
    })
  }

  this.adminSignup = function(admin){
    return $http({
      method: "POST",
      url: '/auth/adminsignup',
      data: admin
    })
  }

})
