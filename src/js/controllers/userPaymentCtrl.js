angular.module('trackOurTruck').controller('userPaymentCtrl', function($scope, $state, stripe, $http) {
$scope.payment = {};
  $scope.payment.amount = 23;
  // 4242424242424242
  $scope.charge = function () {
     return stripe.card.createToken($scope.payment.card)
       .then(function (response) {
         console.log('token created for card ending in ', response.card.last4);
         var payment = angular.copy($scope.payment);
         payment.card = void 0;
         payment.token = response.id;
         return $http.post('/api/payment', payment);
       })
       .then(function (payment) {
         console.log('successfully submitted payment for $', payment.amount);
       })
       .catch(function (err) {
         if (err.type && /^Stripe/.test(err.type)) {
           console.log('Stripe error: ', err.message);
         }
         else {
           console.log('Other error occurred, possibly with your API', err.message);
         }
       });
   };

})
