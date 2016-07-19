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
  truck: {type: Boolean, default: true},
  identifier: {type: String},
  locations: [locationSchema],
  speeds: [speedSchema],
  headings: [headingSchema],
  brakings: [brakeSchema],
  turns: [turnSchema],
  idlings: [idleSchema],
  accelerations: [accelerationSchema],
  diagnostics: [diagnosticSchema]
})

module.exports = mongoose.model("Vehicle", vehicleSchema);
