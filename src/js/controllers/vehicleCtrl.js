angular.module('trackOurTruck').controller('vehicleCtrl', function($scope, $state, vehicleService) {
  $scope.tab = 0;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

   $scope.isSet = function(tabNum){
     return $scope.tab === tabNum;
   };

   $scope.tracker = [
{"timeRecieved":1469227222185,"esn":"4542103060","updateTime":1469227221000,"fixTime":1469227221000,"lat":40.2208,"long":-111.6619,"alt":4416,"speed":1,"heading":354,"satellites":7},
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
{"timeRecieved":1469227995247,"esn":"4542103060","updateTime":1469227994000,"fixTime":1469227994000,"lat":40.226,"long":-111.6608,"alt":4437,"speed":6,"heading":304,"satellites":6},
{"timeRecieved":1469228000469,"esn":"4542103060","updateTime":1469227999000,"fixTime":1469227999000,"lat":40.226,"long":-111.6608,"alt":4445,"speed":0,"heading":308,"satellites":6},
{"timeRecieved":1469243452741,"esn":"4542103060","updateTime":1469243449000,"fixTime":1469243449000,"lat":40.2259,"long":-111.6615,"alt":4462,"speed":14,"heading":274,"satellites":10},
{"timeRecieved":1469243479701,"esn":"4542103060","updateTime":1469243477000,"fixTime":1469243477000,"lat":40.226,"long":-111.6622,"alt":4474,"speed":11,"heading":325,"satellites":9},
{"timeRecieved":1469243573648,"esn":"4542103060","updateTime":1469243571000,"fixTime":1469243571000,"lat":40.2337,"long":-111.6623,"alt":4502,"speed":13,"heading":316,"satellites":9},
{"timeRecieved":1469243574266,"esn":"4542103060","updateTime":1469243573000,"fixTime":1469243573000,"lat":40.2338,"long":-111.6625,"alt":4503,"speed":14,"heading":275,"satellites":9},
{"timeRecieved":1469243756212,"esn":"4542103060","updateTime":1469243753000,"fixTime":1469243753000,"lat":40.2338,"long":-111.6669,"alt":4514,"speed":2,"heading":277,"satellites":9},
{"timeRecieved":1469243836206,"esn":"4542103060","updateTime":1469243833000,"fixTime":1469243833000,"lat":40.2334,"long":-111.6782,"alt":4493,"speed":43,"heading":230,"satellites":11},
{"timeRecieved":1469243853426,"esn":"4542103060","updateTime":1469243851000,"fixTime":1469243851000,"lat":40.2317,"long":-111.6814,"alt":4498,"speed":42,"heading":272,"satellites":11},
{"timeRecieved":1469243855986,"esn":"4542103060","updateTime":1469243855000,"fixTime":1469243855000,"lat":40.232,"long":-111.6823,"alt":4485,"speed":44,"heading":313,"satellites":11},
{"timeRecieved":1469243951567,"esn":"4542103060","updateTime":1469243949000,"fixTime":1469243949000,"lat":40.2462,"long":-111.695,"alt":4517,"speed":71,"heading":357,"satellites":11},
{"timeRecieved":1469244240676,"esn":"4542103060","updateTime":1469244238000,"fixTime":1469244238000,"lat":40.3247,"long":-111.7294,"alt":4550,"speed":74,"heading":318,"satellites":11},
{"timeRecieved":1469244578490,"esn":"4542103060","updateTime":1469244576000,"fixTime":1469244576000,"lat":40.3862,"long":-111.8325,"alt":4505,"speed":75,"heading":333,"satellites":11},
{"timeRecieved":1469244898615,"esn":"4542103060","updateTime":1469244895000,"fixTime":1469244895000,"lat":40.4569,"long":-111.9142,"alt":4732,"speed":77,"heading":353,"satellites":11},
{"timeRecieved":1469244987378,"esn":"4542103060","updateTime":1469244984000,"fixTime":1469244984000,"lat":40.4817,"long":-111.9009,"alt":4587,"speed":72,"heading":34,"satellites":10},
{"timeRecieved":1469245163653,"esn":"4542103060","updateTime":1469245161000,"fixTime":1469245161000,"lat":40.5266,"long":-111.8908,"alt":4360,"speed":11,"heading":317,"satellites":8},
{"timeRecieved":1469245257952,"esn":"4542103060","updateTime":1469245255000,"fixTime":1469245255000,"lat":40.5268,"long":-111.9078,"alt":4326,"speed":6,"heading":214,"satellites":9},
{"timeRecieved":1469245257953,"esn":"4542103060","updateTime":1469245257000,"fixTime":1469245257000,"lat":40.5268,"long":-111.9078,"alt":4329,"speed":7,"heading":171,"satellites":9},
{"timeRecieved":1469245258629,"esn":"4542103060","updateTime":1469245258000,"fixTime":1469245258000,"lat":40.5267,"long":-111.9077,"alt":4329,"speed":9,"heading":130,"satellites":9},
{"timeRecieved":1469245279732,"esn":"4542103060","updateTime":1469245277000,"fixTime":1469245277000,"lat":40.5267,"long":-111.9042,"alt":4328,"speed":49,"heading":89,"satellites":9},
{"timeRecieved":1469245303638,"esn":"4542103060","updateTime":1469245301000,"fixTime":1469245301000,"lat":40.5266,"long":-111.8998,"alt":4336,"speed":12,"heading":131,"satellites":9},
{"timeRecieved":1469245308999,"esn":"4542103060","updateTime":1469245308000,"fixTime":1469245308000,"lat":40.5263,"long":-111.8995,"alt":4343,"speed":6,"heading":174,"satellites":9},
{"timeRecieved":1469245318138,"esn":"4542103060","updateTime":1469245317000,"fixTime":1469245317000,"lat":40.5263,"long":-111.8995,"alt":4352,"speed":0,"heading":180,"satellites":9},
{"timeRecieved":1469245540694,"esn":"4542103060","updateTime":1469245538000,"fixTime":1469245538000,"lat":40.5263,"long":-111.8995,"alt":4382,"speed":0,"heading":177,"satellites":10},
{"timeRecieved":1469245549752,"esn":"4542103060","updateTime":1469245549000,"fixTime":1469245549000,"lat":40.5263,"long":-111.8996,"alt":4363,"speed":5,"heading":268,"satellites":10},
{"timeRecieved":1469245553251,"esn":"4542103060","updateTime":1469245552000,"fixTime":1469245552000,"lat":40.5264,"long":-111.8997,"alt":4366,"speed":11,"heading":309,"satellites":11},
{"timeRecieved":1469245573324,"esn":"4542103060","updateTime":1469245570000,"fixTime":1469245570000,"lat":40.5269,"long":-111.9002,"alt":4355,"speed":23,"heading":289,"satellites":9},
{"timeRecieved":1469245608270,"esn":"4542103060","updateTime":1469245604000,"fixTime":1469245604000,"lat":40.5271,"long":-111.9066,"alt":4349,"speed":14,"heading":335,"satellites":11},
{"timeRecieved":1469245638441,"esn":"4542103060","updateTime":1469245636000,"fixTime":1469245636000,"lat":40.53,"long":-111.909,"alt":4364,"speed":33,"heading":294,"satellites":10},
{"timeRecieved":1469245648280,"esn":"4542103060","updateTime":1469245647000,"fixTime":1469245647000,"lat":40.5302,"long":-111.9103,"alt":4367,"speed":13,"heading":336,"satellites":9},
{"timeRecieved":1469245683990,"esn":"4542103060","updateTime":1469245681000,"fixTime":1469245681000,"lat":40.533,"long":-111.9104,"alt":4337,"speed":6,"heading":292,"satellites":10},
{"timeRecieved":1469245685750,"esn":"4542103060","updateTime":1469245685000,"fixTime":1469245685000,"lat":40.5331,"long":-111.9105,"alt":4331,"speed":9,"heading":339,"satellites":10},
{"timeRecieved":1469245690990,"esn":"4542103060","updateTime":1469245690000,"fixTime":1469245690000,"lat":40.5332,"long":-111.9107,"alt":4325,"speed":7,"heading":297,"satellites":10},
{"timeRecieved":1469245708199,"esn":"4542103060","updateTime":1469245705000,"fixTime":1469245705000,"lat":40.5332,"long":-111.911,"alt":4312,"speed":2,"heading":236,"satellites":10},
{"timeRecieved":1469456956552,"esn":"4542103060","updateTime":1469456956000,"fixTime":1469456956000,"lat":40.5331,"long":-111.9106,"alt":4340,"speed":6,"heading":153,"satellites":9},
{"timeRecieved":1469456966472,"esn":"4542103060","updateTime":1469456965000,"fixTime":1469456965000,"lat":40.533,"long":-111.9105,"alt":4344,"speed":5,"heading":105,"satellites":10},
{"timeRecieved":1469457002369,"esn":"4542103060","updateTime":1469457000000,"fixTime":1469457000000,"lat":40.5301,"long":-111.9103,"alt":4363,"speed":9,"heading":139,"satellites":10},
{"timeRecieved":1469457003748,"esn":"4542103060","updateTime":1469457003000,"fixTime":1469457003000,"lat":40.53,"long":-111.9101,"alt":4359,"speed":20,"heading":96,"satellites":10},
{"timeRecieved":1469457021477,"esn":"4542103060","updateTime":1469457018000,"fixTime":1469457018000,"lat":40.5293,"long":-111.9081,"alt":4352,"speed":35,"heading":137,"satellites":9},
{"timeRecieved":1469457037338,"esn":"4542103060","updateTime":1469457033000,"fixTime":1469457033000,"lat":40.5274,"long":-111.9067,"alt":4358,"speed":29,"heading":178,"satellites":9},
{"timeRecieved":1469457046998,"esn":"4542103060","updateTime":1469457046000,"fixTime":1469457046000,"lat":40.5268,"long":-111.9068,"alt":4369,"speed":11,"heading":221,"satellites":9},
{"timeRecieved":1469457049558,"esn":"4542103060","updateTime":1469457049000,"fixTime":1469457049000,"lat":40.5268,"long":-111.907,"alt":4369,"speed":19,"heading":264,"satellites":9},
{"timeRecieved":1469457071469,"esn":"4542103060","updateTime":1469457065000,"fixTime":1469457065000,"lat":40.5268,"long":-111.9079,"alt":4365,"speed":5,"heading":217,"satellites":9},
{"timeRecieved":1469457071548,"esn":"4542103060","updateTime":1469457066000,"fixTime":1469457066000,"lat":40.5268,"long":-111.9079,"alt":4364,"speed":6,"heading":162,"satellites":10},
{"timeRecieved":1469457071648,"esn":"4542103060","updateTime":1469457067000,"fixTime":1469457067000,"lat":40.5267,"long":-111.9078,"alt":4364,"speed":9,"heading":117,"satellites":10},
{"timeRecieved":1469457141510,"esn":"4542103060","updateTime":1469457138000,"fixTime":1469457138000,"lat":40.5264,"long":-111.892,"alt":4365,"speed":24,"heading":158,"satellites":10},
{"timeRecieved":1469457321240,"esn":"4542103060","updateTime":1469457318000,"fixTime":1469457318000,"lat":40.4808,"long":-111.902,"alt":4593,"speed":74,"heading":212,"satellites":9},
{"timeRecieved":1469457464772,"esn":"4542103060","updateTime":1469457462000,"fixTime":1469457462000,"lat":40.4415,"long":-111.902,"alt":4596,"speed":81,"heading":131,"satellites":10},
{"timeRecieved":1469458051031,"esn":"4542103060","updateTime":1469458048000,"fixTime":1469458048000,"lat":40.3192,"long":-111.7264,"alt":4595,"speed":79,"heading":171,"satellites":9},
{"timeRecieved":1469458294870,"esn":"4542103060","updateTime":1469458292000,"fixTime":1469458292000,"lat":40.2489,"long":-111.6954,"alt":4524,"speed":73,"heading":180,"satellites":10},
{"timeRecieved":1469458382956,"esn":"4542103060","updateTime":1469458380000,"fixTime":1469458380000,"lat":40.2317,"long":-111.6836,"alt":4497,"speed":50,"heading":139,"satellites":9},
{"timeRecieved":1469458387254,"esn":"4542103060","updateTime":1469458386000,"fixTime":1469458386000,"lat":40.2312,"long":-111.6822,"alt":4509,"speed":49,"heading":97,"satellites":10},
{"timeRecieved":1469458393255,"esn":"4542103060","updateTime":1469458392000,"fixTime":1469458392000,"lat":40.2316,"long":-111.6807,"alt":4502,"speed":50,"heading":56,"satellites":10},
{"timeRecieved":1469458473071,"esn":"4542103060","updateTime":1469458470000,"fixTime":1469458470000,"lat":40.2336,"long":-111.6677,"alt":4478,"speed":16,"heading":98,"satellites":8},
{"timeRecieved":1469458473250,"esn":"4542103060","updateTime":1469458472000,"fixTime":1469458472000,"lat":40.2336,"long":-111.6676,"alt":4478,"speed":15,"heading":154,"satellites":9},
{"timeRecieved":1469458526340,"esn":"4542103060","updateTime":1469458523000,"fixTime":1469458523000,"lat":40.2271,"long":-111.6673,"alt":4484,"speed":19,"heading":112,"satellites":8},
{"timeRecieved":1469458587481,"esn":"4542103060","updateTime":1469458584000,"fixTime":1469458584000,"lat":40.227,"long":-111.6606,"alt":4474,"speed":14,"heading":135,"satellites":9},
{"timeRecieved":1469458587482,"esn":"4542103060","updateTime":1469458586000,"fixTime":1469458586000,"lat":40.2269,"long":-111.6606,"alt":4467,"speed":16,"heading":177,"satellites":9},
{"timeRecieved":1469458595540,"esn":"4542103060","updateTime":1469458595000,"fixTime":1469458595000,"lat":40.2263,"long":-111.6605,"alt":4480,"speed":9,"heading":136,"satellites":9},
{"timeRecieved":1469458602960,"esn":"4542103060","updateTime":1469458602000,"fixTime":1469458602000,"lat":40.2263,"long":-111.6605,"alt":4482,"speed":0,"heading":110,"satellites":8},
{"timeRecieved":1469227995247,"esn":"4542103060","updateTime":1469227994000,"fixTime":1469227994000,"lat":40.226,"long":-111.6608,"alt":4437,"speed":6,"heading":304,"satellites":6}
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
      console.log($scope.direction);

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
