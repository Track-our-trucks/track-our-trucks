angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state, vehicleService) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };

   $scope.tracker = [
     {"timeRecieved":1469475736536,"esn":"4542103060","updateTime":1469475736000,"fixTime":1469475736000,"lat":40.2257,"long":-111.6484,"alt":4485,"speed":6,"heading":261,"satellites":8},
     {"timeRecieved":1469475745557,"esn":"4542103060","updateTime":1469475745000,"fixTime":1469475745000,"lat":40.2257,"long":-111.6492,"alt":4477,"speed":25,"heading":272,"satellites":7},
     {"timeRecieved":1469475755558,"esn":"4542103060","updateTime":1469475755000,"fixTime":1469475755000,"lat":40.2257,"long":-111.6506,"alt":4471,"speed":28,"heading":272,"satellites":8},
     {"timeRecieved":1469475805360,"esn":"4542103060","updateTime":1469475804000,"fixTime":1469475804000,"lat":40.2257,"long":-111.6522,"alt":4461,"speed":0,"heading":151,"satellites":7},
     {"timeRecieved":1469475835822,"esn":"4542103060","updateTime":1469475833000,"fixTime":1469475833000,"lat":40.2257,"long":-111.6522,"alt":4471,"speed":5,"heading":272,"satellites":7},
     {"timeRecieved":1469475843204,"esn":"4542103060","updateTime":1469475842000,"fixTime":1469475842000,"lat":40.2257,"long":-111.6528,"alt":4468,"speed":17,"heading":269,"satellites":7},
     {"timeRecieved":1469475853203,"esn":"4542103060","updateTime":1469475852000,"fixTime":1469475852000,"lat":40.2257,"long":-111.6537,"alt":4467,"speed":18,"heading":272,"satellites":7},
     {"timeRecieved":1469475863203,"esn":"4542103060","updateTime":1469475862000,"fixTime":1469475862000,"lat":40.2257,"long":-111.6546,"alt":4463,"speed":19,"heading":271,"satellites":7},
     {"timeRecieved":1469475873204,"esn":"4542103060","updateTime":1469475872000,"fixTime":1469475872000,"lat":40.2257,"long":-111.6558,"alt":4464,"speed":24,"heading":271,"satellites":7},
     {"timeRecieved":1469475883203,"esn":"4542103060","updateTime":1469475882000,"fixTime":1469475882000,"lat":40.2257,"long":-111.6571,"alt":4465,"speed":28,"heading":271,"satellites":7},
     {"timeRecieved":1469475893203,"esn":"4542103060","updateTime":1469475892000,"fixTime":1469475892000,"lat":40.2258,"long":-111.6589,"alt":4462,"speed":35,"heading":268,"satellites":7},
     {"timeRecieved":1469475903203,"esn":"4542103060","updateTime":1469475902000,"fixTime":1469475902000,"lat":40.2258,"long":-111.6604,"alt":4459,"speed":17,"heading":273,"satellites":6},
     {"timeRecieved":1469475905983,"esn":"4542103060","updateTime":1469475905000,"fixTime":1469475905000,"lat":40.2258,"long":-111.6605,"alt":4462,"speed":8,"heading":315,"satellites":7}
      ];





let theFilterer = (val) => {
  if(!$scope.theDate){
    return (new Date(val.fixTime)).toDateString() === (new Date()).toDateString();
  }
  else {

    return (new Date(val.fixTime)).toDateString() == new Date($scope.theDate).toDateString();


  }
}
$scope.fireFilter = () => {
  $scope.theDayPins = $scope.tracker.filter(theFilterer)
  if ($scope.theDate){
    $scope.positionFilter();
  }
}
$scope.fireFilter();





$scope.positionFilter = () => {

  var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  var newCompass;
  $scope.directions = [];
  var newPos = [];
  for (let i = 0; i < $scope.theDayPins.length; i++) {
      var posObj = {
        pos:[$scope.theDayPins[i].lat, $scope.theDayPins[i].long]
      };

      vehicleService.getAddress(posObj).then(function(res){
        var addressWithTime = {
          address: res.data.results[0].formatted_address,
          time: new Date($scope.theDayPins[i].fixTime)
        }
        newPos.push(addressWithTime);

      })

      var val = Math.floor(($scope.tracker[i].heading / 22.5) + 0.5);
      newCompass =  compass[(val % 16)];


      $scope.directions.push(newCompass);


  }



  $scope.addresses = newPos;

  var newPin = [];
  var newLine = [];
  for (let i = 0; i < $scope.theDayPins.length; i++) {
    if((new Date($scope.theDayPins[i].fixTime)).toDateString() === (new Date()).toDateString()){
      var pinObj = {
        pos:[$scope.theDayPins[i].lat, $scope.theDayPins[i].long]
      };
        newPin.push(pinObj.pos);

        newLine.push([$scope.theDayPins[i].lat, $scope.theDayPins[i].long]);
  }


    }


  $scope.pins = newPin;


  $scope.lines = newLine;



};
$scope.positionFilter();





})
