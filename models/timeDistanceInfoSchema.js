var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeDistanceInfo = new Schema({
  fixTime: {type: Number},
  address: {type: String},
  lat: {type: Number},
  long: {type: Number},
  speed: {type: Number},
  heading: {type: Number},
  event: {type: Number}
})

module.exports = timeDistanceInfo;
