angular.module('trackOurTruck', ['ui.router', 'satellizer', 'ngMap', '720kb.datepicker'])
.config( ($stateProvider, $urlRouterProvider) => {

$urlRouterProvider.otherwise('/welcome');

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
.state('contact', {
  url: '/contact',
  templateUrl: './ui-views/contact.html',
  controller: 'contactCtrl'
})
.state('contact.login', {
  url: '/login',
  templateUrl: './ui-views/login.html',
  controller: 'loginCtrl'
})
.state('contact.signup', {
  url: '/signup',
  templateUrl: './ui-views/signup.html',
  controller: 'signUpCtrl'
})

.state('privacy', {
  url: '/privacy',
  templateUrl: './ui-views/privacy.html',
  controller: 'privacyCtrl'
})
.state('privacy.login', {
  url: '/login',
  templateUrl: './ui-views/login.html',
  controller: 'loginCtrl'
})
.state('privacy.signup', {
  url: '/signup',
  templateUrl: './ui-views/signup.html',
  controller: 'signUpCtrl'
})

.state('terms', {
  url: '/terms',
  templateUrl: './ui-views/terms.html',
  controller: 'termsCtrl'
})
.state('terms.login', {
  url: '/login',
  templateUrl: './ui-views/login.html',
  controller: 'loginCtrl'
})
.state('terms.signup', {
  url: '/signup',
  templateUrl: './ui-views/signup.html',
  controller: 'signUpCtrl'
})

.state('admin', {
  url: '/admin',
  templateUrl: './ui-views/admin.html',
  controller: 'adminCtrl'
})
.state('admin.newUser', {
  url: '/newUser',
  templateUrl: './ui-views/adminNewUser.html',
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
.state('userHome.userInfo.info', {
  url: '/profile',
  templateUrl: './ui-views/userInfo-Info.html',
  controller: 'userHomeCtrl'
})
.state('userHome.userInfo.payment', {
  url: '/payment',
  templateUrl: './ui-views/userInfo-Pay.html',
  controller: 'userPaymentCtrl'
})
.state('userHome.vehicleInfo', {
  url: '/vehicle',
  templateUrl: './ui-views/vehicleInfo.html',
  controller: 'vehicleInfoCtrl'
})
.state('userHome.vehicleInfo.location', {
  url: '/location',
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
.state('showUser', {
  url: '/showUser',
  templateUrl: './ui-views/showUser.html',
  controller: 'showUserCtrl'
})
.state('updateUser', {
  url: '/updateUser',
  templateUrl: './ui-views/updateUser.html',
  controller: 'updateUserCtrl'
})
.state('updateVehicle', {
  url: '/updateVehicle',
  templateUrl: './ui-views/updateVehicle.html',
  controller: 'updateVehicleCtrl'
})
.state('help', {
  url: '/help',
  templateUrl: './ui-views/help.html',
  controller: 'helpCtrl'
})
.state('userHome.behaviors', {
  url: '/behaviors',
  templateUrl: "./ui-views/behaviors.html",
  controller: 'behaviorsCtrl'
})

var skipIfLoggedIn = ($q, $auth, $state) => {
     var deferred = $q.defer();
     if ($auth.isAuthenticated()) {
       $state.go('userHome')
       deferred.reject();
     } else {
       deferred.resolve();
     }
     return deferred.promise;
   }

var loginRequired = ($q, $location, $auth) => {
     var deferred = $q.defer();
     if ($auth.isAuthenticated()) {
       deferred.resolve();
     } else {
       $state.go('/welcome');
     }
     return deferred.promise;
   }

})
