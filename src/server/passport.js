module.exports = function(app, passport, GoogleStrategy, Users, Auth) {
  passport.serializeUser(function(user, done) {
    console.log('userrrrr', user);
    done(null, user[0].id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    // var id = user[0].id;
    Users.find({ id: id }, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new GoogleStrategy({
    clientID: Auth.googleAuth.clientID,
    clientSecret: Auth.googleAuth.clientSecret,
    callbackURL: Auth.googleAuth.callbackURL
  }, function(accessToken, refreshToken, profile, done) {

      Users.find({ id: profile.id }, function(err, user) {
          if(err) done(err);
          
          if(user.length === 0) {
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


      // app.get('/google/signin', function(req, res) {
      //   res.json(profile.id);  
      // });

      
    }
  ));
}