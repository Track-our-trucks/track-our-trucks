const Admin = require('../models/admin.js');
const User = require('../models/user.js');
const Vehicle = require('../models/vehicle.js');

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
