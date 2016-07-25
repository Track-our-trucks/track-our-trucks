'use strict';

const dgram = require(`dgram`),
    fs = require(`fs`),
    udpServer = dgram.createSocket(`udp4`),
    Vehicle = require(`./models/vehicle.js`);

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
    let decoded,
        esn;
    try {
        esn = messageStr.substring(4, 14);
        decoded = {
            fixTime: parseInt(messageStr.substring(34, 42), 16) / secToMs, //unix time in ms
            lat: +convert(messageStr.substring(42, 50)).toFixed(4),
            long: +convert(messageStr.substring(50, 58)).toFixed(4),
            speed: Math.round(parseInt(messageStr.substring(66, 74), 16) * cmSecToMPH), //speed in mph
            heading: parseInt(messageStr.substring(74, 78), 16), //degrees from true north
            event: parseInt(messageStr.substring(100, 102), 16)
        };
    } catch (e) {
        console.log(`ERROR decoding data: ${e}`);
    }

    fs.appendFile(`./logs/rawLogFile.txt`, `{timeRecieved: ${Date.now()}, message: ${messageStr}}\n`, err => {
        if (err) console.log(`ERROR writing to raw logfile: ${err}`);
    });
    fs.appendFile(`./logs/decodedLogFile.txt`, `${JSON.stringify(decoded)}\n`, err => {
        if (err) console.log(`ERROR writing to decoded logfile: ${err}`);
    });

    Vehicle.findOneAndUpdate({esn}, {$push: {timeDistanceProfiles: decoded}}, err => {
      if (err) {
        fs.appendFile(`./logs/mongoLogFile.txt`, `{TIME: ${Date.now()},JSON: ${JSON.stringify(decoded)}, ERR: ${err}}\n`, err => {
            if (err) console.log(`ERROR writing to decoded logfile: ${err}`);
        });
      }
    });

});

udpServer.bind(3000);

// Accuracy of lat long decimals, used to decide to round to only four decimals
// The fourth decimal place is worth up to 11 m: it can identify a parcel of land. It is comparable to the typical accuracy of an uncorrected GPS unit with no interference.
// The fifth decimal place is worth up to 1.1 m: it distinguish trees from each other. Accuracy to this level with commercial GPS units can only be achieved with differential correction.