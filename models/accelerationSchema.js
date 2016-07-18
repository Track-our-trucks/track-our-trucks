var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accelerationSchema = new Schema({
  acceleration: String
})

module.exports = accelerationSchema;
