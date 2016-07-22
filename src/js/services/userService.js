angular.module('trackOurTruck').service('userService', function($http, $q){

  this.currentUser;

  this.getUser = user => {
    return $http({
      method: "GET",
      url: '/api/currentuser/' + this.currentUser._id 
    })
  }

  this.signUp = user => {
    return $http({
      method: "POST",
      url: '/auth/signup',
      data: user
    })
  }

  this.login = user => {
    return $http({
      method: "POST",
      url: '/auth/login',
      data: user
    })
  }


})
