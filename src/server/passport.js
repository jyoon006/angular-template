module.exports = function(app, passport, GoogleStrategy, Users, Auth) {
  
  passport.serializeUser(function(user, done) {
    console.log('userrrr', user);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    Users.findOne({ id: id }, function(err, user) {
      if(err) done(err, null);
      else done(err, user);
    });

  });

  passport.use(new GoogleStrategy({
    clientID: Auth.googleAuth.clientID,
    clientSecret: Auth.googleAuth.clientSecret,
    callbackURL: Auth.googleAuth.callbackURL
  }, function(accessToken, refreshToken, profile, done) {

    process.nextTick(function() {
      Users.findOne({ id: profile.id }, function(err, user) {
        if(err) done(err);
        
        if(!user) {
          Users.create({
            id: profile.id,
            name: profile.displayName,
            token: accessToken,
            email: profile.emails[0].value,
            photo: profile.photos[0].value
          }, function(err, user_data) {
            if(err) return console.error('Error creating new user :', err);
            else return done(null, user_data);
          });
        }

        if(user) {
          return done(null, user);
        }
      });
    });
      
    

      
    }
  ));
}