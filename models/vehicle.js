var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeDistanceInfo = require('./timeDistanceInfoSchema.js')

var vehicleSchema = new Schema({
  name: {type: String},
  esn: {type: String},
  timeDistanceProfiles: [timeDistanceInfo]
})

module.exports = mongoose.model("Vehicle", vehicleSchema);
