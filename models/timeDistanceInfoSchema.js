var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeDistanceInfo = new Schema({
  esn: {type: String},
  fixTime: {type: Number},
  lat: {type: Number},
  long: {type: Number},
  speed: {type: Number},
  heading: {type: Number},
  event: {type: Number}
})

module.exports = timeDistanceInfo;
