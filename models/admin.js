var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  vehicles: [{type: String, ref: 'Vehicle'}],
  users: [{type: String, ref: 'User'}],

})

module.exports = mongoose.model("Admin", adminSchema);
