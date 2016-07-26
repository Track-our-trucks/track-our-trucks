angular.module('trackOurTruck').service('vehicleService', function($http, $q, $interval, $auth, $rootScope, userService, $state){

  this.currentUser;
  this.selectedUser;





  this.addVehicle = function(vehicle){
    return $http({
      method: "POST",
      url: '/api/addvehicle/' + this.selectedUser._id,
      data: vehicle
    })
  }

  this.getvehicles = () => {
    return $http({
      method: "GET",
      url: '/api/getvehicles'
    })
  }

  this.getAddress = (pos) => {
    return $http({
      method: 'GET',
      skipAuthorization: true,
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.pos[0]+','+pos.pos[1]+'&key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns'
    })
  }


  this.vehicleTime;

    this.vehicleTimer = () => {
      this.vehicleTime = $interval( () => {
        this.getUserVehicle();
      }, 10000)
    }

  this.vehicleStopTimer = () => {
    $interval.cancel(this.vehicleTime)
    this.vehicleTime = undefined;
  }

  $rootScope.$on('$stateChangeSuccess', () => {
     if ($state.current.name === 'userHome.vehicleInfo.location') {
       this.vehicleTimer();
     } else {
     this.vehicleStopTimer();
   }
   })





  this.getUserVehicle = () => {
    var payloadData = $auth.getPayload()
    userService.getUser(payloadData.sub).then(response => {
       let vehicleArr = response.data.vehicles;
       let tracker = vehicleArr[0].timeDistanceProfiles;
       filter(tracker);
    })
  }




var theFilterer = val => {
   return (new Date(val.fixTime)).toDateString() === (new Date()).toDateString();
}


var filter = tracker => {



 this.theDayPins = tracker.filter(theFilterer);



   this.positionFilter();

}

  this.positionFilter = () => {



    var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    var newCompass;
    this.directions = [];
    var newPos = [];
    for (let i = 0; i < this.theDayPins.length; i++) {

        var posObj = {
          pos:[this.theDayPins[i].lat, this.theDayPins[i].long]
        };



        // this.getAddress(posObj).then(function(res){
        //
        //   var addressWithTime = {
        //     address: res.data.results[0].formatted_address,
        //     time: new Date(this.theDayPins[i].fixTime)
        //   }
        //
        //   newPos.push(addressWithTime);
        //
        // })


        var val = Math.floor((this.theDayPins[i].heading / 22.5) + 0.5);
        newCompass =  compass[(val % 16)];


        this.directions.push(newCompass);


    }



    this.addresses = newPos;

    var newPin = [];
    var newLine = [];
    for (let i = 0; i < this.theDayPins.length; i++) {

        var pinObj = {
          pos:[this.theDayPins[i].lat, this.theDayPins[i].long]
        };
          newPin.push(pinObj.pos);

          newLine.push([this.theDayPins[i].lat, this.theDayPins[i].long]);



      }


    this.pins = newPin;


    this.lines = newLine;



  }





})
