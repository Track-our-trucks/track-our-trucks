angular.module('trackOurTruck', ['ui.router', 'satellizer'])
.config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/welcome');

$stateProvider

.state('welcome', {
  url: '/welcome',
  templateUrl: './ui-views/welcome.html',
  controller: 'welcomeCtrl'
})
.state('login', {
  url: '/login',
  templateUrl: './ui-views/login.html',
  controller: 'loginCtrl'
})
.state('signUp', {
  url: '/signup',
  templateUrl: './ui-views/signUp.html',
  controller: 'signUpCtrl'
})



})
