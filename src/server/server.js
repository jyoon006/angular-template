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
var MongoStore = require('connect-mongostore')(session);
var flash = require('connect-flash');

var app = express();

var uri = process.env.production ? process.env.MONGODB_URI : 'mongodb://localhost/nbadraft';
mongoose.connect(uri);

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
  cookie: { maxAge: 60000, secure: true },
  store: new MongoStore({'db': 'sessions'})
}));
app.use(flash());
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.use(passport.initialize());
app.use(passport.session());

// app.get('/', function(req, res) {
//   console.log('landing pageeeee');
// })

require('./passport')(app, passport, GoogleStrategy, Users, Auth);
require('./routes')(app, passport, session, Users, Discussion);

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

// module.exports = app;

