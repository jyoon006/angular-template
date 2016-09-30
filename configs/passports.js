import GoogleStrategy from 'passport-google-oauth';
import Auth from './auth';

export default function(passport) {

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
    
    // code for login (use('local-login', new LocalStategy))
    // code for signup (use('local-signup', new LocalStategy))
    // code for facebook (use('facebook', new FacebookStrategy))
    // code for twitter (use('twitter', new TwitterStrategy))

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({
      consumerKey     : Auth.googleAuth.clientID,
      consumerSecret   : Auth.googleAuth.clientSecret,
      callbackURL     : Auth.googleAuth.callbackURL
    }, function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
    ));

}