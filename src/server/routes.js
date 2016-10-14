module.exports = function(app, passport, session, Users) {
  // app.post('/', function(req, res) {
  //   console.log("landing page");
  // })

  // app.get('/api/signin', function(req, res) {
  //   console.log('req session', req.session);
  //   if( req.session.cookie._expires === new Date()) {
  //     res.send('expired');
  //   }
  //   else {
  //     res.send('active');
  //   }
  // });

  app.get('/auth/google/logout', function(req, res) {
    req.logOut();
    req.session.destroy(function (err) {
      res.redirect('/'); 
    });
  })

  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
  app.get('/auth/google/callback', passport.authenticate('google', 
    { 
      successRedirect : '/#/playerlist', 
      failureRedirect : '/',
      failureFlash : true
    }
  ));

  app.post('/profile', function(req, res) {
    var user_id = req.body.data;
    
    Users.find({ id: user_id }, function(err, user) {
      if(err) return console.error(err);
      if(user.length === 0) return console.error('Cannot find user');
      else res.json(user);
    
    });
  });

  app.post('/users/myteam', function(req, res) {
    var user_id = req.body.data.user_id;
    console.log(req.body.data.player);
    var player = req.body.data.player;

    Users.find({ id: user_id }, function(err, user) {
      if(err) return console.error(err);
      if(user.length === 0) return console.error('Cannot find user');
      
      else {
        console.log('user', user);
        user[0].players.push(player);
        user[0].save(function (err) {
          if(err) return console.error(err);
          return res.json(user);
        });
      }
      
    });
  });
}







