const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');

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
    User.findById(req.params.id, (err, user) => {
      if(err){
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(user)
      }
    })
  },

  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if(err) {
        res.status(500).json(err.message)
      }
      else {
        res.status(200).json(user)
      }
    })
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
