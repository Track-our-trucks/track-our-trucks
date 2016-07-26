var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeDistanceInfo = require('./timeDistanceInfoSchema.js')

var vehicleSchema = new Schema({
  name: {type: String},
  esn: {type: String, index: true},
  timeDistanceProfiles: [timeDistanceInfo]
})

module.exports = mongoose.model("Vehicle", vehicleSchema);
