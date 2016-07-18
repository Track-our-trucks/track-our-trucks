var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var adminSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  vehicles: [{type: String, ref: 'Vehicle'}],
  users: [{type: String, ref: 'User'}],

})

adminSchema.pre('save', function(next) {
  var admin = this;
  if (!admin.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(admin.password, salt, function(err, hash) {
      admin.password = hash;
      next();
    });
  });
});

adminSchema.methods.comparePassword = (password, hash, done) => {
  bcrypt.compare(password, hash, function(err, isMatch) {
    done(err, isMatch);
  });
};

module.exports = mongoose.model("Admin", adminSchema);
