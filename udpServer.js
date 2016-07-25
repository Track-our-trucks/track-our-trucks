'use strict';

// require a model and push things to the model directly using the esn as unique id
// we'll keep the fs module for error logging so we can tell when something goes wrong

const Vehicle = require(`./models/vehicle`)

const dgram = require(`dgram`),
    fs = require(`fs`),
    udpServer = dgram.createSocket(`udp4`);

udpServer.on('listening', () => {
    const address = udpServer.address();
    console.log(`UDP Server listening on ${address.address}:${address.port}`);
});

let convert = hex => {
    let dec = parseInt(hex, 16);
    return (dec < parseInt('7FFFFFFF', 16)) ?
        dec * 0.0000001 :
        0 - ((parseInt('FFFFFFFF', 16) - dec) * 0.0000001);
};

udpServer.on('message', (message, remote) => {
    const messageStr = message.toString('hex'),
        cmSecToMPH = 0.0223694,
        cmToFeet = 0.0328084,
        secToMs = 1000;
    let decoded;
    try {
        decoded = {
            esn: messageStr.substring(4, 14),
            fixTime: parseInt(messageStr.substring(34, 42), 16) / secToMs, //unix time in ms
            lat: +convert(messageStr.substring(42, 50)).toFixed(4),
            long: +convert(messageStr.substring(50, 58)).toFixed(4),
            speed: Math.round(parseInt(messageStr.substring(66, 74), 16) * cmSecToMPH), //speed in mph
            heading: parseInt(messageStr.substring(74, 78), 16), //degrees from true north
            event: parseInt(messageStr.substring(100, 102), 16)
        };
        Vehicle.findOneAndUpdate({esn: decoded.esn}, {$push: {timeDistanceProfiles: decoded}}, (err, success)=> {
          if(err){
            console.log(err);
          }
          else {

          }
        })
    } catch (e) {
        console.log(`ERROR decoding data: ${e}`);
    }
    // definitely remove the following two fs writes once live
    fs.appendFile(`./public/rawLogFile.txt`, `{timeRecieved: ${Date.now()}, message: ${messageStr}}\n`, err => {
        if (err) console.log(`ERROR writing to raw logfile: ${err}`);
    });
    fs.appendFile(`./public/decodedLogFile.txt`, `${JSON.stringify(decoded)}\n`, err => {
        if (err) console.log(`ERROR writing to decoded logfile: ${err}`);
    });

    /*
      model.findOneAndUpdate({esn: decoded.esn}, {$push: {data: decoded}}, (err, user) => {
      if (err) {
        fs.appendFile(`./loggingErrors.txt`, `{date: ${Date.now()}, error: ${err}, data: ${messageStr}}\n`, err => {
            if (err) console.log(`ERROR writing to decoded logfile: ${err}`);
        });
      }
      })
    */

});

udpServer.bind(3000);

// Accuracy of lat long decimals, used to decide to round to only four decimals
// The fourth decimal place is worth up to 11 m: it can identify a parcel of land. It is comparable to the typical accuracy of an uncorrected GPS unit with no interference.
// The fifth decimal place is worth up to 1.1 m: it distinguish trees from each other. Accuracy to this level with commercial GPS units can only be achieved with differential correction.
