'use strict';

const axios = require('axios');

const config = require(`./config.js`),
    dgram = require(`dgram`),
    fs = require(`fs`),
    mongoose = require('mongoose'),
    udpServer = dgram.createSocket(`udp4`),
    Vehicle = require(`./models/vehicle`);

mongoose.connect(config.database);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Mongo connected to ${config.database}`));

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
    let decoded, esn;
    try {
        esn = messageStr.substring(4, 14);
        decoded = {
            fixTime: parseInt(messageStr.substring(34, 42), 16) * secToMs, //unix time in ms
            lat: +convert(messageStr.substring(42, 50)).toFixed(4),
            long: +convert(messageStr.substring(50, 58)).toFixed(4),
            speed: Math.round(parseInt(messageStr.substring(66, 74), 16) * cmSecToMPH), //speed in mph
            heading: parseInt(messageStr.substring(74, 78), 16), //degrees from true north
            event: parseInt(messageStr.substring(100, 102), 16),
            distanceTraveled: parseInt(messageStr.substring(102, 104), 16)
        };
    } catch (e) {
        console.log(`ERROR decoding data: ${e}`);
    }

    fs.appendFile(`./public/rawLogFile.txt`, `{timeRecieved: ${Date.now()}, message: ${messageStr}}\n`, err => {
        if (err) console.log(`ERROR writing to raw logfile: ${err}`);
    });

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${decoded.lat},${decoded.long}&key=AIzaSyAhLCAAyP4IVHjWK3kf6Ts_kGII2jtX5qI`).then(response => {
      decoded.address = response.data.results[0].formatted_address;
      // axios.get('https://roads.googleapis.com/v1/speedLimits?path=' + decoded.lat +','+ decoded.long +'&key=AIzaSyAhLCAAyP4IVHjWK3kf6Ts_kGII2jtX5qI').then(nextResponse => {
      //   console.log(nextResponse.data);
      //   decoded.speedLimit = nextResponse.data;

        fs.appendFile(`./public/decodedLogFile.txt`, `${JSON.stringify(decoded)}\n`, err => {
            if (err) console.log(`ERROR writing to decoded logfile: ${err}`);
        });

        Vehicle.findOneAndUpdate({esn}, {$push: {timeDistanceProfiles: decoded}}, (err, success) => {
          if (err) console.log(`MONGO ERROR: ${err}`);
          else console.log(`MONGO SUCCESS: ${success}`);
        });
      // })
      // .catch(e => console.log(e))


    })



});

udpServer.bind(3000);

// Accuracy of lat long decimals, used to decide to round to only four decimals
// The fourth decimal place is worth up to 11 m: it can identify a parcel of land. It is comparable to the typical accuracy of an uncorrected GPS unit with no interference.
// The fifth decimal place is worth up to 1.1 m: it distinguish trees from each other. Accuracy to this level with commercial GPS units can only be achieved with differential correction.
