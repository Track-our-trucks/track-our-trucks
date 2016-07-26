angular.module('trackOurTruck').controller('userPaymentCtrl', function($scope, $state, $document) {

  let form = $document.find("payment-form")

  let  stripeResponseHandler = function(status, response) {

    if (response.error) {
      form.find('.payment-errors').text(response.error.message);
      form.find('.submit').prop('disabled', false); // Re-enable submission

    } else {
      var token = response.id;
      form.append($document.find('<input type="hidden" name="stripeToken">').val(token));
      form.get(0).submit();
    }
  };

  $scope.submit = function(event){

    form.find('.submit').prop('disabled', true);

    Stripe.card.createToken(form, stripeResponseHandler);



  };

})
