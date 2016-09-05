angular.module('trackOurTruck').service('adminService', function($http, $q) {


  this.selectedUser;




  this.getUsers = () => {
    return $http({
      method: "GET",
      url: '/api/getusers'
    })
  }

  this.deleteUser = (user, adminId) => {
    return $http({
      method: "DELETE",
      url: '/api/deleteuser/' + user._id + '/' + adminId
    })
  }

  this.showUser = user =>{
    return $http({
      method: "GET",
      url: '/api/getoneuser/' + user._id
    })
  }

  this.updateUser = user => {
    return $http({
      method: "PUT",
      url: '/api/updateuser/' + user._id,
      data: user
    })
  }

  this.adminLogin = admin => {
    return $http({
      method: "POST",
      url: '/auth/adminlogin',
      data: admin
    })
  }

  this.adminSignup = admin => {
    return $http({
      method: "POST",
      url: '/auth/adminsignup',
      data: admin
    })
  }

})
