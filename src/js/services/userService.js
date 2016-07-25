angular.module('trackOurTruck').service('userService', ($http, $q) => {

  this.getUser = userId => {

    return $http({
      method: "GET",
      url: '/api/currentuser/' + userId
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
