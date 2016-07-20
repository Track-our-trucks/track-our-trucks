angular.module('trackOurTruck', ['ui.router', 'satellizer', 'ngMap'])
.config( ($stateProvider, $urlRouterProvider) => {

$urlRouterProvider.otherwise('/welcome.globe');

$stateProvider

.state('about', {
  url: '/about',
  templateUrl: './ui-views/about.html',
  controller: 'aboutCtrl'
})
.state("about.login", {
  url:'/login',
  templateUrl:'./ui-views/login.html',
  controller: 'loginCtrl'
})
.state('about.signup', {
  url: '/signup',
  templateUrl: './ui-views/signUp.html',
  controller: 'signUpCtrl'
})
.state('welcome', {
  url: '/welcome',
  templateUrl: './ui-views/welcome.html',
  controller: 'welcomeCtrl'
})
.state("welcome.globe", {
  url:'/',
  templateUrl:'./ui-views/welcomeGlobe.html',
  controller: 'welcomeCtrl'
})
.state("welcome.marker", {
  url:'/',
  templateUrl:'./ui-views/welcomeMarker.html',
  controller: 'welcomeCtrl'
})
.state("welcome.truck", {
  url:'/',
  templateUrl:'./ui-views/welcomeTruck.html',
  controller: 'welcomeCtrl'
})
.state("welcome.clock", {
  url:'/',
  templateUrl:'./ui-views/welcomeClock.html',
  controller: 'welcomeCtrl'
})
.state("welcome.speed", {
  url:'/',
  templateUrl:'./ui-views/welcomeSpeed.html',
  controller: 'welcomeCtrl'
})
.state("welcome.calender", {
  url:'/',
  templateUrl:'./ui-views/welcomeCalender.html',
  controller: 'welcomeCtrl'
})
.state("welcome.login", {
  url:'/login',
  templateUrl:'./ui-views/login.html',
  controller: 'loginCtrl'
})
.state('welcome.signup', {
  url: '/signup',
  templateUrl: './ui-views/signUp.html',
  controller: 'signUpCtrl'
})
.state('admin', {
  url: '/admin',
  templateUrl: './ui-views/admin.html',
  controller: 'adminCtrl'
})
.state('userHome', {
  url: '/userhome',
  templateUrl: './ui-views/userHome.html',
  controller: 'userHomeCtrl'
})
.state('userHome.userInfo', {
  url: '/userInfo',
  templateUrl: './ui-views/userInfo.html',
  controller: 'userInfoCtrl'
})
.state('userHome.vehicleInfo', {
  url: '/vehicle',
  templateUrl: './ui-views/vehicleInfo.html',
  controller: 'vehicleCtrl'
})
.state('userHome.vehicleInfo.location', {
  url: '/vehicle',
  templateUrl: './ui-views/vehicleLocation.html',
  controller: 'vehicleCtrl'
})
.state('adminLogin', {
  url: '/adminlogin',
  templateUrl: './ui-views/adminLogin.html',
  controller: 'adminLoginCtrl'
})
.state('adminSignup', {
  url: '/adminsignup',
  templateUrl: './ui-views/adminSignup.html',
  controller: 'adminSignupCtrl'
})


})
