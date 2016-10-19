var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  photo: String,
  players: []
});

module.exports = mongoose.model('Users', Users);