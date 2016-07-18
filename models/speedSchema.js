var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var speedSchema = new Schema({
  speed: {type: String, required: true}
})

module.exports = speedSchema;
