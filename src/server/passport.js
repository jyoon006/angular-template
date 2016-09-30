var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Auth = require('../../configs/auth');
var app = require('./server');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, id)
});

passport.use(new GoogleStrategy({
  clientID: Auth.googleAuth.clientID,
  clientSecret: Auth.googleAuth.clientSecret,
  callbackURL: Auth.googleAuth.callbackURL
}, function(accessToken, refreshToken, profile, cb) {
    console.log(profile, cb);
    app.get('/api/userdata', function(req, res) {
      res.json(profile);
    });
    
    return cb(null, profile);
  }
));
  
    
module.exports = passport;