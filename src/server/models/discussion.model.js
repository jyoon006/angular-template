var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Discussion = new Schema({
  creator: String,
  topic: String,
  message: String,
  replies: Array
});

module.exports = mongoose.model('Discussion', Discussion);