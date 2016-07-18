var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var idleSchema = new Schema({
  idle: String
})

module.exports = idleSchema;
