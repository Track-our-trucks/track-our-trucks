var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var turnSchema = new Schema({
  turn: String
})

module.exports = turnSchema;
