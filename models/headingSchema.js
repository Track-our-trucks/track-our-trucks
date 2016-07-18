var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var headingSchema = new Schema({
  heading: {type: String, required: true}
})

module.exports = headingSchema;
