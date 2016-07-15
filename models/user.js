var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  identifier: {type: String},
  setLocation: [{type: Object}],
  vehicles: [{type: String, ref: 'Vehicle'}]
})

userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (password, hash, done) => {
  bcrypt.compare(password, hash, function(err, isMatch) {
    done(err, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
