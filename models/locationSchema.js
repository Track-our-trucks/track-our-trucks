var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
  latitude: {type: String, required: true},
  longitude: {type: String, required: true}
})

module.exports = locationSchema;
