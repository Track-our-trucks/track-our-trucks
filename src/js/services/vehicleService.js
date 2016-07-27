angular.module('trackOurTruck').service('vehicleService', function($http, $q, $interval, $auth, $rootScope, userService, $state){

  this.currentUser;
  this.selectedUser;

  this.theDate = new Date();

  this.addVehicle = vehicle => {
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

  this.getAddress = pos => {
    return $http({
      method: 'GET',
      skipAuthorization: true,
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.pos[0]+','+pos.pos[1]+'&key=AIzaSyCE-IsoxmgBiFRKXn0ZgZcYlLZ1FSvpJns'
    })
  }

  this.getVehicle = () => {
    return $http({
      method: "GET",
      url: '/api/getonevehicle/' + this.selectedUser._id
    })
  }

  this.deleteVehicle = (vehicleId, userId) => {
    return $http({
      method: "DELETE",
      url: '/api/deletevehicle/' + vehicleId + '/' + userId
    })
  }

  this.updateVehicle = (vehicle, userId)  => {
    return $http({
      method: "PUT",
      url: '/api/updatevehicle/' + this.currentVehicleId,
      data: vehicle
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
       let tracker = vehicleArr[1].timeDistanceProfiles;
       filter(tracker);
    })
  }




var theFilterer = val => {
  console.log(this.theDate);
   return (new Date(val.fixTime)).toDateString() === (new Date(this.theDate)).toDateString();
}


var filter = tracker => {



 let theDayPins = tracker;

 // .filter(theFilterer);



   this.positionFilter(theDayPins);

}

  this.positionFilter = theDayPins => {



    var compass = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    var newCompass;
    this.directions = [];
    var newPos = [];
    for (let i = 0; i < theDayPins.length; i++) {

        var posObj = {
          pos:[theDayPins[i].lat, theDayPins[i].long]
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


        var val = Math.floor((theDayPins[i].heading / 22.5) + 0.5);
        newCompass =  compass[(val % 16)];


        this.directions.push(newCompass);


    }



    this.addresses = newPos;

    var newPin = [];
    var newLine = [];
    for (let i = 0; i < theDayPins.length; i++) {

        var pinObj = {
          pos:[theDayPins[i].lat, theDayPins[i].long]
        };
          newPin.push(pinObj.pos);

          newLine.push([theDayPins[i].lat, theDayPins[i].long]);



      }


    this.pins = newPin;


    this.lines = newLine;



  }





})
