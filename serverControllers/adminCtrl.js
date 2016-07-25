const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');
const bcrypt = require('bcryptjs');

module.exports = {

  index: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(users)
      }
    })
  },

  show: (req, res) => {
    User.findById(req.params.id).populate('vehicles').exec((err, user) => {
      if(err){
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(user)
      }
    })
  },

  update: (req, res, next) => {

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash;
        User.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name, phoneNumber: req.body.phoneNumber, email: req.body.email, password: req.body.password}}, (err, user) => {
          if(err) {
            res.status(500).json(err.message)
          }
          else {
            res.status(200).json(user)
          }
        })
      });
    });

  },

  destroy: (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if(err) {
        res.status(500).json(err.message)
      } else {
        res.status(200).json(user)
      }
    })
  }


}
