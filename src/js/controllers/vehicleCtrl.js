angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state, vehicleService) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };

   $scope.tracker = [
  {"timeRecieved":"2016-07-21T16:59:42.183Z","updateTime":"2016-07-21T18:59:37.000Z","fixTime":"2016-07-21T18:59:37.000Z","lat":40.226058599999995,"long":-111.66050299999999,"alt":4492.3229784000005,"speed":3.0869772,"heading":105,"satellites":7},
 {"timeRecieved":"2016-07-21T16:59:42.195Z","updateTime":"2016-07-21T18:59:38.000Z","fixTime":"2016-07-21T18:59:38.000Z","lat":40.226056,"long":-111.6604977,"alt":4493.93059,"speed":2.1698318000000003,"heading":114,"satellites":7},
 {"timeRecieved":"2016-07-21T16:59:42.979Z","updateTime":"2016-07-21T18:59:42.000Z","fixTime":"2016-07-21T18:59:42.000Z","lat":40.226082,"long":-111.6605134,"alt":4496.7521124,"speed":3.6014734,"heading":345,"satellites":7},
 {"timeRecieved":"2016-07-21T17:00:01.285Z","updateTime":"2016-07-21T18:59:59.000Z","fixTime":"2016-07-21T18:59:59.000Z","lat":40.2268295,"long":-111.66052239999999,"alt":4482.4804584,"speed":8.813543600000001,"heading":358,"satellites":5},
 {"timeRecieved":"2016-07-21T17:00:03.984Z","updateTime":"2016-07-21T19:00:03.000Z","fixTime":"2016-07-21T19:00:03.000Z","lat":40.2269286,"long":-111.66050999999999,"alt":4488.7796712,"speed":3.9593838000000003,"heading":358,"satellites":6},
 {"timeRecieved":"2016-07-21T17:00:30.456Z","updateTime":"2016-07-21T19:00:28.000Z","fixTime":"2016-07-21T19:00:28.000Z","lat":40.2271041,"long":-111.6620975,"alt":4492.0277028,"speed":2.1027236,"heading":288,"satellites":6},
 {"timeRecieved":"2016-07-21T17:00:30.794Z","updateTime":"2016-07-21T19:00:30.000Z","fixTime":"2016-07-21T19:00:30.000Z","lat":40.2271228,"long":-111.6621347,"alt":4496.9489628,"speed":5.8831522000000005,"heading":306,"satellites":7},
 {"timeRecieved":"2016-07-21T17:01:02.267Z","updateTime":"2016-07-21T19:00:58.000Z","fixTime":"2016-07-21T19:00:58.000Z","lat":40.229489099999995,"long":-111.6621382,"alt":4515.3544752,"speed":6.71082,"heading":2,"satellites":5},
 {"timeRecieved":"2016-07-21T17:01:17.251Z","updateTime":"2016-07-21T19:01:14.000Z","fixTime":"2016-07-21T19:01:14.000Z","lat":40.2296653,"long":-111.6621534,"alt":4513.5172048,"speed":12.1689536,"heading":359,"satellites":5},
 {"timeRecieved":"2016-07-21T17:02:03.268Z","updateTime":"2016-07-21T19:02:00.000Z","fixTime":"2016-07-21T19:02:00.000Z","lat":40.2348745,"long":-111.662111,"alt":4533.7271792,"speed":9.059607,"heading":356,"satellites":5},
 {"timeRecieved":"2016-07-21T17:02:03.269Z","updateTime":"2016-07-21T19:02:02.000Z","fixTime":"2016-07-21T19:02:02.000Z","lat":40.2349435,"long":-111.6621157,"alt":4534.5473892,"speed":11.2294388,"heading":359,"satellites":5},
 {"timeRecieved":"2016-07-21T17:03:28.805Z","updateTime":"2016-07-21T19:03:26.000Z","fixTime":"2016-07-21T19:03:26.000Z","lat":40.245855299999995,"long":-111.6620039,"alt":4552.592009200001,"speed":8.94776,"heading":2,"satellites":5},
 {"timeRecieved":"2016-07-21T17:03:28.807Z","updateTime":"2016-07-21T19:03:27.000Z","fixTime":"2016-07-21T19:03:27.000Z","lat":40.245876599999995,"long":-111.661998,"alt":4555.8072324,"speed":7.8740288000000005,"heading":0,"satellites":6},
 {"timeRecieved":"2016-07-21T17:04:19.282Z","updateTime":"2016-07-21T19:04:16.000Z","fixTime":"2016-07-21T19:04:16.000Z","lat":40.2500856,"long":-111.6619865,"alt":4570.4725872,"speed":8.6345884,"heading":2,"satellites":4},
 {"timeRecieved":"2016-07-21T17:05:02.084Z","updateTime":"2016-07-21T19:04:59.000Z","fixTime":"2016-07-21T19:04:59.000Z","lat":40.250304799999995,"long":-111.66200189999999,"alt":4554.9214056,"speed":12.0347372,"heading":359,"satellites":5},
 {"timeRecieved":"2016-07-21T17:06:02.818Z","updateTime":"2016-07-21T19:06:00.000Z","fixTime":"2016-07-21T19:06:00.000Z","lat":40.2572465,"long":-111.6618039,"alt":4578.6746872,"speed":1.4092722,"heading":354,"satellites":6},
 {"timeRecieved":"2016-07-21T17:06:18.012Z","updateTime":"2016-07-21T19:06:14.000Z","fixTime":"2016-07-21T19:06:14.000Z","lat":40.2572603,"long":-111.6617922,"alt":4586.3518528,"speed":4.47388,"heading":2,"satellites":6},
 {"timeRecieved":"2016-07-21T17:07:29.159Z","updateTime":"2016-07-21T19:07:26.000Z","fixTime":"2016-07-21T19:07:26.000Z","lat":40.2635486,"long":-111.6663854,"alt":4570.4725872,"speed":1.0513618,"heading":55,"satellites":6},
 {"timeRecieved":"2016-07-21T17:08:00.020Z","updateTime":"2016-07-21T19:07:57.000Z","fixTime":"2016-07-21T19:07:57.000Z","lat":40.263506299999996,"long":-111.66627319999999,"alt":4589.4358424,"speed":3.9593838000000003,"heading":84,"satellites":6},
 {"timeRecieved":"2016-07-21T17:08:36.813Z","updateTime":"2016-07-21T19:08:34.000Z","fixTime":"2016-07-21T19:08:34.000Z","lat":40.2644568,"long":-111.66501149999999,"alt":4580.4135324,"speed":0.8500372,"heading":61,"satellites":6},
 {"timeRecieved":"2016-07-21T17:08:43.353Z","updateTime":"2016-07-21T19:08:42.000Z","fixTime":"2016-07-21T19:08:42.000Z","lat":40.2644473,"long":-111.66500839999999,"alt":4586.4830864000005,"speed":1.9237684000000002,"heading":143,"satellites":6},
 {"timeRecieved":"2016-07-21T19:55:28.685Z","updateTime":"2016-07-21T19:55:26.000Z","fixTime":"2016-07-21T19:55:26.000Z","lat":40.2645,"long":-111.6651,"alt":4627,"speed":0,"heading":81,"satellites":6},
 {"timeRecieved":"2016-07-21T19:55:45.074Z","updateTime":"2016-07-21T19:55:42.000Z","fixTime":"2016-07-21T19:55:42.000Z","lat":40.2644,"long":-111.6651,"alt":4634,"speed":4,"heading":182,"satellites":6},
 {"timeRecieved":"2016-07-21T19:56:07.864Z","updateTime":"2016-07-21T19:56:05.000Z","fixTime":"2016-07-21T19:56:05.000Z","lat":40.2641,"long":-111.666,"alt":4579,"speed":1,"heading":277,"satellites":7},
 {"timeRecieved":"2016-07-21T19:56:14.785Z","updateTime":"2016-07-21T19:56:14.000Z","fixTime":"2016-07-21T19:56:14.000Z","lat":40.2641,"long":-111.6661,"alt":4578,"speed":4,"heading":266,"satellites":8},
 {"timeRecieved":"2016-07-21T19:58:18.370Z","esn":"4542103060","updateTime":"2016-07-21T19:58:16.000Z","fixTime":"2016-07-21T19:58:16.000Z","lat":40.2632,"long":-111.6671,"alt":4575,"speed":5,"heading":229,"satellites":7},
 {"timeRecieved":"2016-07-21T19:59:56.864Z","esn":"4542103060","updateTime":"2016-07-21T19:59:54.000Z","fixTime":"2016-07-21T19:59:54.000Z","lat":40.2508,"long":-111.6621,"alt":4535,"speed":2,"heading":170,"satellites":7},
 {"timeRecieved":"2016-07-21T20:01:06.961Z","esn":"4542103060","updateTime":"2016-07-21T20:01:04.000Z","fixTime":"2016-07-21T20:01:04.000Z","lat":40.2508,"long":-111.6621,"alt":4521,"speed":5,"heading":181,"satellites":7},
 {"timeRecieved":"2016-07-21T20:03:29.657Z","esn":"4542103060","updateTime":"2016-07-21T20:03:27.000Z","fixTime":"2016-07-21T20:03:27.000Z","lat":40.2342,"long":-111.6622,"alt":4515,"speed":9,"heading":163,"satellites":5},
 {"timeRecieved":"2016-07-21T20:03:39.237Z","esn":"4542103060","updateTime":"2016-07-21T20:03:38.000Z","fixTime":"2016-07-21T20:03:38.000Z","lat":40.2342,"long":-111.6622,"alt":4527,"speed":6,"heading":185,"satellites":6}
];

$scope.positionFilter = (function(){

  var newPos = [];
  for (let i = 0; i < $scope.tracker.length; i++) {
      var posObj = {
        pos:[$scope.tracker[i].lat, $scope.tracker[i].long]
      };

      vehicleService.getAddress(posObj).then(function(res){
        var addressWithTime = {
          address: res.data.results[0].formatted_address,
          time: new Date($scope.tracker[i].fixTime)
        }
        newPos.push(addressWithTime);
        console.log(addressWithTime);
      })

  }

  $scope.addresses = newPos;

  var newPin = [];
  for (let i = 0; i < $scope.tracker.length; i++) {
      var pinObj = {
        pos:[$scope.tracker[i].lat, $scope.tracker[i].long]
      };
        newPin.push(pinObj.pos);
  }

  $scope.pins = newPin;
})();




})
