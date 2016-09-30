var express = require('express');
var parser = require('body-parser');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Auth = require('../../configs/auth');

var app = express();

var PORT = process.env.PORT || 8000;

var options = {
  dotfiles: 'ignore',
  extensions: ['html'],
  redirect: false
};

// used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
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


app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', 
  { 
    successRedirect : '/#/playerlist', 
    failureRedirect : '/'
  }
));

app.get('/playerlist', isLoggedIn, function(req, res) {
  
})

function isLoggedIn(req, res, next) {
    console.log(req);
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

app.use(express.static(__dirname + '/../app', options));


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});