var express = require('express');
var parser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var googleAuth = {
  'googleAuth': {
    'clientID': process.env.clientID,
    'clientSecret': process.env.clientSecret,
    'callbackURL': process.env.callbackURL
  }
};

var Auth = !process.env.callbackURL ? require('../../configs/auth') : googleAuth;
var Users = require('./models/users.model.js');
var Discussion = require('./models/discussion.model.js');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

var PORT = process.env.PORT || 8000;

var options = {
  dotfiles: 'ignore',
  extensions: ['html'],
  redirect: false
};


// Users.remove({}, function(err, user) {
//   console.log('users removed');
// });

// Users.find({}, function(err, users) {
//   console.log('users', users);
// })

app.use(express.static(__dirname + '/../app', options));
app.use(morgan('tiny'));
app.use(cookieParser('secret'));
app.use(parser.urlencoded({ extended: true}));
app.use(parser.json());

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
  // cookie: { maxAge: 60000 }
}));

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

var uri = process.env.callbackURL ? process.env.MONGODB_URI : 'mongodb://localhost/nbadraft';
mongoose.connect(uri);

require('./passport')(app, passport, GoogleStrategy, Users, Auth);
require('./routes')(app, passport, session, Users, Discussion);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
