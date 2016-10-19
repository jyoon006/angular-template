var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Discussion = new Schema({
  creator: String,
  messages: Array
});

module.exports = mongoose.model('Discussion', Discussion);