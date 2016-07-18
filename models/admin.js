var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: 8},
  vehicles: [{type: String, ref: 'Vehicle'}],
  users: [{type: String, ref: 'User'}],

})

module.exports = mongoose.model("Admin", adminSchema);
