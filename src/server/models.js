var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
  name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Users', Users);