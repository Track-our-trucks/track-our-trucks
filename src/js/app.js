angular.module('trackOurTruck', ['ui.router', 'satellizer', 'ngMap'])
.config( ($stateProvider, $urlRouterProvider) => {

$urlRouterProvider.otherwise('/welcome');

$stateProvider

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
.state("welcome.learn", {
  url:'/',
  templateUrl:'./ui-views/welcomeLearn.html',
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
  url:'/',
  templateUrl:'./ui-views/login.html',
  controller: 'loginCtrl'
})
// .state('login', {
//   url: '/login',
//   templateUrl: './ui-views/login.html',
//   controller: 'loginCtrl'
// })
.state('signUp', {
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
  templateUrl: './ui-views/userHomeTmpl.html',
  controller: 'userHomeCtrl'
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
