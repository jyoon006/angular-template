var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Auth = require('../../configs/auth');
var Users = require('./models.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

mongoose.connect('mongodb://localhost/nbadraft');

var PORT = process.env.PORT || 8000;

var options = {
  dotfiles: 'ignore',
  extensions: ['html'],
  redirect: false
};

app.use(express.static(__dirname + '/../app', options));
app.use(morgan('tiny'));
app.use(cookieParser('secret'));
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000, secure: true }
}));
app.use(flash());
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', function(req, res) {
//   console.log('landing pageeeee');
// })
require('./passport')(app, passport, GoogleStrategy, Users, Auth);
require('./routes')(app, passport, session, Users);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

// module.exports = app;

