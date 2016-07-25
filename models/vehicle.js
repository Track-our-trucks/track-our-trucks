var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var locationSchema = require('./locationSchema.js')
var speedSchema = require('./speedSchema.js')
var brakeSchema = require('./brakeSchema.js')
var turnSchema = require('./turnSchema.js')
var idleSchema = require('./idleSchema.js')
var accelerationSchema = require('./accelerationSchema.js')
var diagnosticSchema = require('./diagnosticSchema.js')
var headingSchema = require('./diagnosticSchema.js')

var vehicleSchema = new Schema({
  name: {type: String},
  esn: {type: String, index: true},
  timeDistanceProfiles: [{type: Object}]
})

module.exports = mongoose.model("Vehicle", vehicleSchema);
