var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  identifier: {type: String},
  setLocation: [{type: Object}],
  vehicles [{type: String, ref: 'Vehicle'}]
})

module.export = mongoose.model('User', userSchema);
