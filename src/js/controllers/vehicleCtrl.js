angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state, vehicleService) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };

   $scope.tracker = [
     {"timeRecieved":1469227157245,"esn":"4542103060","updateTime":1469227154000,"fixTime":1469227154000,"lat":40.2176,"long":-111.6607,"alt":4442,"speed":14,"heading":39,"satellites":7},
{"timeRecieved":1469227160206,"esn":"4542103060","updateTime":1469227159000,"fixTime":1469227159000,"lat":40.2177,"long":-111.6606,"alt":4440,"speed":4,"heading":42,"satellites":7},
{"timeRecieved":1469227165206,"esn":"4542103060","updateTime":1469227164000,"fixTime":1469227164000,"lat":40.2178,"long":-111.6606,"alt":4437,"speed":4,"heading":42,"satellites":7},
{"timeRecieved":1469227170206,"esn":"4542103060","updateTime":1469227169000,"fixTime":1469227169000,"lat":40.218,"long":-111.6604,"alt":4441,"speed":19,"heading":18,"satellites":7},
{"timeRecieved":1469227179206,"esn":"4542103060","updateTime":1469227178000,"fixTime":1469227178000,"lat":40.2189,"long":-111.6604,"alt":4456,"speed":23,"heading":359,"satellites":7},
{"timeRecieved":1469227183245,"esn":"4542103060","updateTime":1469227182000,"fixTime":1469227182000,"lat":40.2192,"long":-111.6605,"alt":4450,"speed":20,"heading":327,"satellites":7},
{"timeRecieved":1469227185785,"esn":"4542103060","updateTime":1469227185000,"fixTime":1469227185000,"lat":40.2194,"long":-111.6607,"alt":4447,"speed":21,"heading":294,"satellites":7},
{"timeRecieved":1469227190225,"esn":"4542103060","updateTime":1469227189000,"fixTime":1469227189000,"lat":40.2194,"long":-111.6612,"alt":4445,"speed":24,"heading":270,"satellites":7},
{"timeRecieved":1469227195205,"esn":"4542103060","updateTime":1469227194000,"fixTime":1469227194000,"lat":40.2194,"long":-111.6617,"alt":4436,"speed":12,"heading":271,"satellites":6},
{"timeRecieved":1469227200206,"esn":"4542103060","updateTime":1469227199000,"fixTime":1469227199000,"lat":40.2194,"long":-111.6618,"alt":4424,"speed":5,"heading":301,"satellites":6},
{"timeRecieved":1469227202985,"esn":"4542103060","updateTime":1469227202000,"fixTime":1469227202000,"lat":40.2195,"long":-111.6619,"alt":4421,"speed":11,"heading":335,"satellites":6},
{"timeRecieved":1469227207205,"esn":"4542103060","updateTime":1469227206000,"fixTime":1469227206000,"lat":40.2197,"long":-111.6619,"alt":4419,"speed":18,"heading":359,"satellites":6},
{"timeRecieved":1469227212205,"esn":"4542103060","updateTime":1469227211000,"fixTime":1469227211000,"lat":40.2202,"long":-111.6619,"alt":4421,"speed":24,"heading":0,"satellites":7},
{"timeRecieved":1469227217225,"esn":"4542103060","updateTime":1469227216000,"fixTime":1469227216000,"lat":40.2206,"long":-111.6619,"alt":4425,"speed":18,"heading":10,"satellites":7},
{"timeRecieved":1469227222185,"esn":"4542103060","updateTime":1469227221000,"fixTime":1469227221000,"lat":40.2208,"long":-111.6619,"alt":4416,"speed":1,"heading":354,"satellites":7},
{"timeRecieved":1469227225407,"esn":"4542103060","updateTime":1469227224000,"fixTime":1469227224000,"lat":40.2208,"long":-111.6619,"alt":4417,"speed":0,"heading":354,"satellites":7},
{"timeRecieved":1469227306758,"esn":"4542103060","updateTime":1469227306000,"fixTime":1469227306000,"lat":40.2213,"long":-111.6622,"alt":4456,"speed":18,"heading":342,"satellites":7},
{"timeRecieved":1469227311758,"esn":"4542103060","updateTime":1469227311000,"fixTime":1469227311000,"lat":40.2215,"long":-111.6623,"alt":4455,"speed":7,"heading":358,"satellites":7},
{"timeRecieved":1469227316757,"esn":"4542103060","updateTime":1469227316000,"fixTime":1469227316000,"lat":40.2217,"long":-111.6622,"alt":4455,"speed":11,"heading":22,"satellites":7},
{"timeRecieved":1469227319157,"esn":"4542103060","updateTime":1469227318000,"fixTime":1469227318000,"lat":40.2218,"long":-111.6622,"alt":4455,"speed":12,"heading":349,"satellites":7},
{"timeRecieved":1469227320917,"esn":"4542103060","updateTime":1469227320000,"fixTime":1469227320000,"lat":40.2219,"long":-111.6623,"alt":4453,"speed":11,"heading":314,"satellites":7},
{"timeRecieved":1469227322157,"esn":"4542103060","updateTime":1469227321000,"fixTime":1469227321000,"lat":40.2219,"long":-111.6624,"alt":4450,"speed":10,"heading":279,"satellites":7},
{"timeRecieved":1469227323456,"esn":"4542103060","updateTime":1469227323000,"fixTime":1469227323000,"lat":40.2218,"long":-111.6624,"alt":4449,"speed":12,"heading":244,"satellites":7},
{"timeRecieved":1469227324656,"esn":"4542103060","updateTime":1469227324000,"fixTime":1469227324000,"lat":40.2218,"long":-111.6625,"alt":4449,"speed":12,"heading":213,"satellites":7},
{"timeRecieved":1469227325456,"esn":"4542103060","updateTime":1469227325000,"fixTime":1469227325000,"lat":40.2217,"long":-111.6625,"alt":4449,"speed":13,"heading":182,"satellites":7},
{"timeRecieved":1469227329757,"esn":"4542103060","updateTime":1469227329000,"fixTime":1469227329000,"lat":40.2215,"long":-111.6623,"alt":4452,"speed":20,"heading":164,"satellites":7},
{"timeRecieved":1469227334757,"esn":"4542103060","updateTime":1469227334000,"fixTime":1469227334000,"lat":40.221,"long":-111.6621,"alt":4456,"speed":24,"heading":162,"satellites":7},
{"timeRecieved":1469227343736,"esn":"4542103060","updateTime":1469227343000,"fixTime":1469227343000,"lat":40.2203,"long":-111.662,"alt":4453,"speed":14,"heading":187,"satellites":7},
{"timeRecieved":1469227345897,"esn":"4542103060","updateTime":1469227345000,"fixTime":1469227345000,"lat":40.2202,"long":-111.6621,"alt":4451,"speed":10,"heading":221,"satellites":7},
{"timeRecieved":1469227347457,"esn":"4542103060","updateTime":1469227347000,"fixTime":1469227347000,"lat":40.2202,"long":-111.6622,"alt":4451,"speed":10,"heading":254,"satellites":7},
{"timeRecieved":1469227351736,"esn":"4542103060","updateTime":1469227351000,"fixTime":1469227351000,"lat":40.2201,"long":-111.6624,"alt":4446,"speed":12,"heading":266,"satellites":7},
{"timeRecieved":1469227356957,"esn":"4542103060","updateTime":1469227356000,"fixTime":1469227356000,"lat":40.2201,"long":-111.6628,"alt":4442,"speed":17,"heading":274,"satellites":6},
{"timeRecieved":1469227361737,"esn":"4542103060","updateTime":1469227361000,"fixTime":1469227361000,"lat":40.2202,"long":-111.6632,"alt":4442,"speed":13,"heading":279,"satellites":7},
{"timeRecieved":1469227366159,"esn":"4542103060","updateTime":1469227365000,"fixTime":1469227365000,"lat":40.2202,"long":-111.6634,"alt":4446,"speed":7,"heading":246,"satellites":7},
{"timeRecieved":1469227366918,"esn":"4542103060","updateTime":1469227366000,"fixTime":1469227366000,"lat":40.2202,"long":-111.6634,"alt":4447,"speed":6,"heading":203,"satellites":7},
{"timeRecieved":1469227367917,"esn":"4542103060","updateTime":1469227367000,"fixTime":1469227367000,"lat":40.2202,"long":-111.6634,"alt":4448,"speed":7,"heading":166,"satellites":7},
{"timeRecieved":1469227369157,"esn":"4542103060","updateTime":1469227368000,"fixTime":1469227368000,"lat":40.2201,"long":-111.6633,"alt":4448,"speed":7,"heading":134,"satellites":7},
{"timeRecieved":1469227369916,"esn":"4542103060","updateTime":1469227369000,"fixTime":1469227369000,"lat":40.2202,"long":-111.6633,"alt":4446,"speed":6,"heading":99,"satellites":7},
{"timeRecieved":1469227370916,"esn":"4542103060","updateTime":1469227370000,"fixTime":1469227370000,"lat":40.2202,"long":-111.6633,"alt":4444,"speed":5,"heading":68,"satellites":7},
{"timeRecieved":1469227374916,"esn":"4542103060","updateTime":1469227374000,"fixTime":1469227374000,"lat":40.2202,"long":-111.6631,"alt":4430,"speed":11,"heading":99,"satellites":7},
{"timeRecieved":1469227379737,"esn":"4542103060","updateTime":1469227379000,"fixTime":1469227379000,"lat":40.2201,"long":-111.6628,"alt":4409,"speed":15,"heading":96,"satellites":7},
{"timeRecieved":1469227384737,"esn":"4542103060","updateTime":1469227384000,"fixTime":1469227384000,"lat":40.2201,"long":-111.6624,"alt":4385,"speed":15,"heading":88,"satellites":7},
{"timeRecieved":1469227389756,"esn":"4542103060","updateTime":1469227389000,"fixTime":1469227389000,"lat":40.2201,"long":-111.662,"alt":4380,"speed":6,"heading":107,"satellites":7},
{"timeRecieved":1469227393156,"esn":"4542103060","updateTime":1469227392000,"fixTime":1469227392000,"lat":40.2201,"long":-111.662,"alt":4364,"speed":7,"heading":138,"satellites":7},
{"timeRecieved":1469227395916,"esn":"4542103060","updateTime":1469227395000,"fixTime":1469227395000,"lat":40.22,"long":-111.6619,"alt":4370,"speed":14,"heading":169,"satellites":7},
{"timeRecieved":1469227400737,"esn":"4542103060","updateTime":1469227400000,"fixTime":1469227400000,"lat":40.2196,"long":-111.6619,"alt":4371,"speed":17,"heading":180,"satellites":7},
{"timeRecieved":1469227405738,"esn":"4542103060","updateTime":1469227405000,"fixTime":1469227405000,"lat":40.2195,"long":-111.6619,"alt":4398,"speed":0,"heading":188,"satellites":7},
{"timeRecieved":1469227409917,"esn":"4542103060","updateTime":1469227409000,"fixTime":1469227409000,"lat":40.2194,"long":-111.662,"alt":4410,"speed":8,"heading":222,"satellites":7},
{"timeRecieved":1469227411457,"esn":"4542103060","updateTime":1469227411000,"fixTime":1469227411000,"lat":40.2194,"long":-111.6621,"alt":4414,"speed":11,"heading":254,"satellites":7},
{"timeRecieved":1469227415818,"esn":"4542103060","updateTime":1469227415000,"fixTime":1469227415000,"lat":40.2193,"long":-111.6624,"alt":4424,"speed":20,"heading":266,"satellites":7},
{"timeRecieved":1469227420816,"esn":"4542103060","updateTime":1469227420000,"fixTime":1469227420000,"lat":40.2193,"long":-111.663,"alt":4430,"speed":19,"heading":275,"satellites":6},
{"timeRecieved":1469227425817,"esn":"4542103060","updateTime":1469227425000,"fixTime":1469227425000,"lat":40.2195,"long":-111.6635,"alt":4436,"speed":22,"heading":303,"satellites":7},
{"timeRecieved":1469227430817,"esn":"4542103060","updateTime":1469227430000,"fixTime":1469227430000,"lat":40.2197,"long":-111.664,"alt":4438,"speed":23,"heading":275,"satellites":7},
{"timeRecieved":1469227438677,"esn":"4542103060","updateTime":1469227438000,"fixTime":1469227438000,"lat":40.2196,"long":-111.665,"alt":4432,"speed":21,"heading":238,"satellites":7},
{"timeRecieved":1469227440736,"esn":"4542103060","updateTime":1469227440000,"fixTime":1469227440000,"lat":40.2194,"long":-111.6651,"alt":4436,"speed":22,"heading":205,"satellites":6},
{"timeRecieved":1469227444837,"esn":"4542103060","updateTime":1469227444000,"fixTime":1469227444000,"lat":40.2191,"long":-111.6652,"alt":4443,"speed":25,"heading":180,"satellites":7},
{"timeRecieved":1469227460449,"esn":"4542103060","updateTime":1469227457000,"fixTime":1469227457000,"lat":40.2179,"long":-111.6652,"alt":4438,"speed":7,"heading":184,"satellites":7},
{"timeRecieved":1469227462730,"esn":"4542103060","updateTime":1469227462000,"fixTime":1469227462000,"lat":40.2178,"long":-111.6652,"alt":4442,"speed":7,"heading":216,"satellites":7},
{"timeRecieved":1469227464530,"esn":"4542103060","updateTime":1469227464000,"fixTime":1469227464000,"lat":40.2178,"long":-111.6653,"alt":4443,"speed":12,"heading":250,"satellites":7},
{"timeRecieved":1469227468811,"esn":"4542103060","updateTime":1469227468000,"fixTime":1469227468000,"lat":40.2178,"long":-111.6657,"alt":4440,"speed":22,"heading":271,"satellites":7},
{"timeRecieved":1469227477830,"esn":"4542103060","updateTime":1469227477000,"fixTime":1469227477000,"lat":40.218,"long":-111.6668,"alt":4442,"speed":24,"heading":309,"satellites":7},
{"timeRecieved":1469227482830,"esn":"4542103060","updateTime":1469227482000,"fixTime":1469227482000,"lat":40.2183,"long":-111.6672,"alt":4449,"speed":18,"heading":307,"satellites":7},
{"timeRecieved":1469227487809,"esn":"4542103060","updateTime":1469227487000,"fixTime":1469227487000,"lat":40.2183,"long":-111.6673,"alt":4466,"speed":3,"heading":308,"satellites":7},
{"timeRecieved":1469227495829,"esn":"4542103060","updateTime":1469227495000,"fixTime":1469227495000,"lat":40.2188,"long":-111.6674,"alt":4476,"speed":24,"heading":0,"satellites":7},
{"timeRecieved":1469227522670,"esn":"4542103060","updateTime":1469227520000,"fixTime":1469227520000,"lat":40.2214,"long":-111.6674,"alt":4489,"speed":11,"heading":1,"satellites":7},
{"timeRecieved":1469227525810,"esn":"4542103060","updateTime":1469227525000,"fixTime":1469227525000,"lat":40.2215,"long":-111.6674,"alt":4487,"speed":1,"heading":2,"satellites":7},
{"timeRecieved":1469227540665,"esn":"4542103060","updateTime":1469227536000,"fixTime":1469227536000,"lat":40.2219,"long":-111.6674,"alt":4479,"speed":21,"heading":0,"satellites":7},
{"timeRecieved":1469227587781,"esn":"4542103060","updateTime":1469227585000,"fixTime":1469227585000,"lat":40.2274,"long":-111.6675,"alt":4467,"speed":28,"heading":1,"satellites":6},
{"timeRecieved":1469227593820,"esn":"4542103060","updateTime":1469227593000,"fixTime":1469227593000,"lat":40.2283,"long":-111.6675,"alt":4460,"speed":27,"heading":0,"satellites":6},
{"timeRecieved":1469227602820,"esn":"4542103060","updateTime":1469227602000,"fixTime":1469227602000,"lat":40.2292,"long":-111.6674,"alt":4465,"speed":24,"heading":4,"satellites":6},
{"timeRecieved":1469227608020,"esn":"4542103060","updateTime":1469227607000,"fixTime":1469227607000,"lat":40.2296,"long":-111.6673,"alt":4469,"speed":16,"heading":10,"satellites":6},
{"timeRecieved":1469227612240,"esn":"4542103060","updateTime":1469227611000,"fixTime":1469227611000,"lat":40.2297,"long":-111.6673,"alt":4469,"speed":8,"heading":41,"satellites":6},
{"timeRecieved":1469227613739,"esn":"4542103060","updateTime":1469227613000,"fixTime":1469227613000,"lat":40.2297,"long":-111.6672,"alt":4468,"speed":13,"heading":73,"satellites":6},
{"timeRecieved":1469227617819,"esn":"4542103060","updateTime":1469227617000,"fixTime":1469227617000,"lat":40.2297,"long":-111.6668,"alt":4475,"speed":23,"heading":89,"satellites":6},
{"timeRecieved":1469227642896,"esn":"4542103060","updateTime":1469227640000,"fixTime":1469227640000,"lat":40.2297,"long":-111.6632,"alt":4476,"speed":24,"heading":91,"satellites":6},
{"timeRecieved":1469227645815,"esn":"4542103060","updateTime":1469227645000,"fixTime":1469227645000,"lat":40.2297,"long":-111.6627,"alt":4484,"speed":12,"heading":91,"satellites":6},
{"timeRecieved":1469227650815,"esn":"4542103060","updateTime":1469227650000,"fixTime":1469227650000,"lat":40.2297,"long":-111.6626,"alt":4493,"speed":2,"heading":91,"satellites":6},
{"timeRecieved":1469227655814,"esn":"4542103060","updateTime":1469227655000,"fixTime":1469227655000,"lat":40.2297,"long":-111.6626,"alt":4500,"speed":0,"heading":91,"satellites":6},
{"timeRecieved":1469227687783,"esn":"4542103060","updateTime":1469227685000,"fixTime":1469227685000,"lat":40.2297,"long":-111.6626,"alt":4565,"speed":0,"heading":91,"satellites":6},
{"timeRecieved":1469227702664,"esn":"4542103060","updateTime":1469227699000,"fixTime":1469227699000,"lat":40.2296,"long":-111.6623,"alt":4545,"speed":12,"heading":128,"satellites":6},
{"timeRecieved":1469227702665,"esn":"4542103060","updateTime":1469227701000,"fixTime":1469227701000,"lat":40.2296,"long":-111.6623,"alt":4540,"speed":14,"heading":162,"satellites":6},
{"timeRecieved":1469227706804,"esn":"4542103060","updateTime":1469227706000,"fixTime":1469227706000,"lat":40.2292,"long":-111.6623,"alt":4516,"speed":19,"heading":185,"satellites":6},
{"timeRecieved":1469227711805,"esn":"4542103060","updateTime":1469227711000,"fixTime":1469227711000,"lat":40.229,"long":-111.6623,"alt":4504,"speed":3,"heading":186,"satellites":6},
{"timeRecieved":1469227715805,"esn":"4542103060","updateTime":1469227715000,"fixTime":1469227715000,"lat":40.229,"long":-111.6623,"alt":4499,"speed":0,"heading":186,"satellites":6},
{"timeRecieved":1469227808370,"esn":"4542103060","updateTime":1469227807000,"fixTime":1469227807000,"lat":40.229,"long":-111.6623,"alt":4499,"speed":0,"heading":179,"satellites":6},
{"timeRecieved":1469227812008,"esn":"4542103060","updateTime":1469227811000,"fixTime":1469227811000,"lat":40.229,"long":-111.6623,"alt":4427,"speed":5,"heading":142,"satellites":6},
{"timeRecieved":1469227894760,"esn":"4542103060","updateTime":1469227891000,"fixTime":1469227891000,"lat":40.2271,"long":-111.6616,"alt":4466,"speed":9,"heading":131,"satellites":6},
{"timeRecieved":1469227895237,"esn":"4542103060","updateTime":1469227894000,"fixTime":1469227894000,"lat":40.2271,"long":-111.6614,"alt":4470,"speed":14,"heading":90,"satellites":6},
{"timeRecieved":1469227905717,"esn":"4542103060","updateTime":1469227905000,"fixTime":1469227905000,"lat":40.227,"long":-111.6606,"alt":4467,"speed":12,"heading":132,"satellites":6},
{"timeRecieved":1469227908237,"esn":"4542103060","updateTime":1469227907000,"fixTime":1469227907000,"lat":40.2268,"long":-111.6606,"alt":4469,"speed":13,"heading":173,"satellites":6},
{"timeRecieved":1469227918517,"esn":"4542103060","updateTime":1469227918000,"fixTime":1469227918000,"lat":40.2264,"long":-111.6605,"alt":4461,"speed":6,"heading":129,"satellites":6},
{"timeRecieved":1469227924757,"esn":"4542103060","updateTime":1469227924000,"fixTime":1469227924000,"lat":40.2264,"long":-111.6604,"alt":4459,"speed":0,"heading":116,"satellites":6},
{"timeRecieved":1469227954977,"esn":"4542103060","updateTime":1469227952000,"fixTime":1469227952000,"lat":40.2264,"long":-111.6604,"alt":4459,"speed":0,"heading":85,"satellites":6},
{"timeRecieved":1469227992289,"esn":"4542103060","updateTime":1469227990000,"fixTime":1469227990000,"lat":40.226,"long":-111.6606,"alt":4435,"speed":10,"heading":220,"satellites":6},
{"timeRecieved":1469227992748,"esn":"4542103060","updateTime":1469227992000,"fixTime":1469227992000,"lat":40.2259,"long":-111.6607,"alt":4436,"speed":7,"heading":261,"satellites":6},
{"timeRecieved":1469227995247,"esn":"4542103060","updateTime":1469227994000,"fixTime":1469227994000,"lat":40.226,"long":-111.6608,"alt":4437,"speed":6,"heading":304,"satellites":6}
   ];

$scope.positionFilter = (function(){

  var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
  var newCompass;

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

      })

      var val = Math.floor(($scope.tracker[i].heading / 22.5) + 0.5);
      newCompass =  compass[(val % 16)];
      console.log($scope.direction);

      $scope.directions.push(newCompass);


  }

  $scope.addresses = newPos;

  var newPin = [];
  var newLine = [];
  for (let i = 0; i < $scope.tracker.length; i++) {
      var pinObj = {
        pos:[$scope.tracker[i].lat, $scope.tracker[i].long]
      };
        newPin.push(pinObj.pos);

        newLine.push([$scope.tracker[i].lat, $scope.tracker[i].long]);
  }

  $scope.pins = newPin;
  console.log('marker coordinates' + $scope.pins);

  $scope.lines = newLine;
  console.log('line coordinates' + $scope.lines);


})();




})
