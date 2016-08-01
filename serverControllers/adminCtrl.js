// dependencies
const moment = require('moment');
const config = require('../theConfig.js');
const jwt = require('jwt-simple');

// models
const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');
const bcrypt = require('bcryptjs');


var adminCreateJWT = user => {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.ADMIN_TOKEN_SECRET);
}

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

  login: (req, res) => {
      Admin.findOne({
          email: req.body.email
      }, (err, admin) => {

          if (!admin) {
              return res.status(401).send({
                  message: 'Invalid email and/or password'
              });
          }
          admin.comparePassword(req.body.password, admin.password, (err, isMatch) => {
              if (!isMatch) {
                  return res.status(401).send({
                      message: 'Invalid email and/or password'
                  });
              }
              res.send({
                  token: adminCreateJWT(admin),
                  admin: admin
              });
          });
      });
  },

  signup: (req, res) => {
      Admin.findOne({
          email: req.body.email
      }, (err, existingAdmin) => {
          if (existingAdmin) {
              return res.status(409).send({
                  message: 'Email is already taken'
              });
          }
          Admin.create(req.body, (err, result) => {

              if (err) {
                  res.status(500).send({
                      message: err.message
                  });
              }
              res.send({
                  token: adminCreateJWT(result)
              });
          });
      });
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
    User.findByIdAndRemove(req.params.userid, (err, user) => {
      if(err) {
        res.status(500).json(err.message)
      } else {
        Admin.findByIdAndUpdate(req.params.adminid, {$pull: {users: req.params.userid}}, (err, response) => {
          if(err){
            res.status(500).json(err.message)
          }
        res.status(200).json(user)
      })
    }
  })

}

}
