var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diagnosticSchema = new Schema({
  diagnostic: String
})

module.exports = diagnosticSchema;
