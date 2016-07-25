const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');

module.exports = {

  create: (req, res) => {
    Vehicle.create(req.body, (err, vehicle) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        User.findByIdAndUpdate(req.params.userid, {$push: {vehicles: vehicle._id}}, (err, user) => {
          if(err) {
            res.status(500).json(err.message)
          }
          else {
            res.status(200).json(vehicle)
          }
        })
      }
    })
  },

  index: (req, res) => {
    Vehicle.find({}, (err, vehicles) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(vehicles)
      }
    })
  },

  show: (req, res) => {
    Vehicle.findOne({}, (err, vehicle) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(vehicle)
      }
    })
  }




}
