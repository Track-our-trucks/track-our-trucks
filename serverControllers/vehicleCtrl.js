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
    Vehicle.findById(req.params.id, (err, vehicle) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(vehicle)
      }
    })
  },

  update: (req, res) => {
    Vehicle.findByIdAndUpdate(req.params.id, {$set: {name: req.body.name, esn: req.body.esn}}, (err, success) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(success)
      }
    })

  },

  destroy: (req, res) => {
    Vehicle.findByIdAndRemove(req.params.vehicleid, (err, vehicle) => {
      if (err) {
        res.status(500).json(err.message)
      }
      else {
        User.findByIdAndUpdate(req.params.userid, {$pull: {vehicles: req.params.vehicleid}}, (err, response) => {
          if(err){
            res.status(500).json(err.message)
          }
          else {
            res.status(200).json(response)
          }
        })

      }
    })
  }




}
