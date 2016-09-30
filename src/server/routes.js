var app = require('./server.js');
var passport = require('./passport');


app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', 
  { 
    successRedirect : '/#/playerlist', 
    failureRedirect : '/'
  }
));

  // app.get('/playerlist', isLoggedIn, function(req, res) {
    
  // })

  // function isLoggedIn(req, res, next) {
  //     console.log(req);
  //     // if user is authenticated in the session, carry on
  //     if (req.isAuthenticated())
  //         return next();

  //     // if they aren't redirect them to the home page
  //     res.redirect('/');
  // }


