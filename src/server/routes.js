module.exports = function(app, passport, session, Users, Discussion) {
  
  app.get('/google/signin', function(req, res) {
    res.json(req.user);
  });

  app.get('/auth/google/logout', function(req, res) {
    req.logOut();
    req.session.destroy(function (err) {
      res.redirect('/'); 
    });
  })

  app.get('/auth/google/login', function(req, res) {
    // res.redirect('/#/playerlist');
    console.log('req', req.user);
    res.redirect('/#/playerlist');
  });

  // function isLoggedIn(req, res, next) {
  //   console.log(req.isAuthenticated());
  //   // if user is authenticated in the session, carry on
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }
  //   // if they aren't redirect them to the home page
  //   res.redirect('/');
  // }



  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
  app.get('/auth/google/callback', passport.authenticate('google', 
    { 
      successRedirect : '/auth/google/login', 
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
    var player = req.body.data.player;

    Users.findOne({ id: user_id }, function(err, user) {
      if(err) return console.error(err);
      if(user.length === 0) return console.error('Cannot find user');
      
      else {
        user.players.push(player);
        user.save(function (err) {
          if(err) return console.error(err);
          else return res.json(user);
        });
      }
      
    });
  });

  app.post('/users/myteam/update', function(req, res) {
    var user_id = req.body.data.user_id;
    var player_name = req.body.data.player.Player;
    Users.findOne({ id: user_id }, function(err, user) {

      user.players.forEach(function(player, index, list) {
        if( player.Player === player_name ) {
          list.splice(index, 1);
        }
      });

      user.save(function (err) {
        if(err) return console.error(err);
        else return res.json(user);
      });

    });
  });

  app.get('/users/teams/all', function(req, res) {
    Users.find({}, function(err, users) {
      if(err) return console.error(err);
      else res.json(users);
    });
  });

  app.post('/discussion/newthread', function(req, res) {

    var user_id = req.body.data.user_id;
    var topic = req.body.data.topic;
    var message = req.body.data.message;

    Users.findOne({ id: user_id }, function(err, user) {
      if(err) return console.error(err);
      
      var username = user.name;

      Discussion.create({
        creator: username,
        topic: topic,
        message: message
      }, function(err, thread) {
        if(err) return console.error(err);
        else res.json(thread);
      });

    });
  });

  app.get('/discussion/threads', function(req, res) {
    Discussion.find({}, function(err, threads) {
      if(err) return console.error(err);
      else res.json(threads);
    });
  });

  app.get('/dicussion/threadtopic/:id', function(req, res) {
    var discussion_id = req.params.id;

    Discussion.findOne({ '_id': discussion_id }, function(err, thread) {
      if(err) return console.error(err);
      else res.json(thread);
    });
  });

  app.post('/discussion/threads/reply', function(req, res) {
    console.log('thread reply', req.body)
    var thread_id = req.body.data.thread_id;
    var user_id = req.body.data.user_id;
    var message = req.body.data.message;
    Discussion.findOne({ '_id': thread_id}, function(err, thread) {
      if(err) return console.error(err);
      console.log(thread);
      Users.findOne({ id: user_id}, function(err, user) {
        if(err) return console.error(err);

        var username = user.name;

        thread.replies.push({ name: username, message: message });

        thread.save(function(err, updatedThread) {
          if(err) return console.error(err);
          else res.json(updatedThread);
        });
      });
    });
  });
}







