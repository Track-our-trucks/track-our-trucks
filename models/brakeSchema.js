var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brakeSchema = new Schema({
  brake: String
})

module.exports = brakeSchema;
