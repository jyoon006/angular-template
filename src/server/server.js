var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Auth = require('../../configs/auth');

var app = express();

mongoose.connect('mongodb://localhost/nbadraft');

var PORT = process.env.PORT || 8000;

var options = {
  dotfiles: 'ignore',
  extensions: ['html'],
  redirect: false
};

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('tiny'));
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());
app.use(express.static(__dirname + '/../app', options));

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

module.exports = app;

var routes = require('./routes');