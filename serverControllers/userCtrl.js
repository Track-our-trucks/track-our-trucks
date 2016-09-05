// dependencies
const moment = require('moment');
const config = require('../theConfig.js');
const jwt = require('jwt-simple');

// models
const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');

// token creation
var createJWT = (user) => {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

module.exports = {

  show: (req, res) => {
    User.findById(req.params.id).populate('vehicles').exec( (err, user) => {
      if(err){
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(user)
      }
    })
  },

  create: (req, res) => {
      User.findOne({
          email: req.body.email
      }, (err, existingUser) => {
          if (existingUser) {
              return res.status(409).json({
                  message: 'Email is already taken'
              });
          }
          else if (typeof req.body.phoneNumber != 'number') {
            console.log(req.body.phoneNumber);
              return res.status(412).json({
                  message: 'Phone requires numbers'
              })
          }
          // this is for production only
          // else if (req.body.password.length < 8) {
          //     return res.status(411).json({
          //         message: 'Password needs to be at least 8 characters long'
          //     })
          // }
          User.create(req.body, (err, result) => {
              if (err) {
                  res.status(500).send({
                      message: err.message
                  });
              }
              else {
                Admin.findOneAndUpdate({email: 'trackourtruck@gmail.com'}, {$push: {users: result._id}}, (err, user) => {

                  if(err){
                    res.send(500).json(err.message)
                  }
                  else {
                    res.send({
                        token: createJWT(result),
                        user: result
                    });
                  }
                })

              }

          });
      });
  },

  login: (req, res) => {
      User.findOne({email: req.body.email}, (err, user) => {
          if (!user) {
              return res.status(401).send({
                  message: 'Invalid email and/or password'
              });
          }
          user.comparePassword(req.body.password, user.password, (err, isMatch) => {
              if (!isMatch) {
                  return res.status(401).send({
                      message: 'Invalid email and/or password'
                  });
              }
              res.send({
                  token: createJWT(user),
                  user: user
              });
          });
      });
  },

  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if(err){
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(user)
      }
    })
  }
}
