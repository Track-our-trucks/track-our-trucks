angular.module('trackOurTruck').service('userService', function($http, $q){

  this.signUp = function(user){
    return $http({
      method: "POST",
      url: '/auth/signup',
      data: user
    })
  }

  this.login = function(user){
    return $http({
      method: "POST",
      url: '/auth/login',
      data: user
    })
  }
})
