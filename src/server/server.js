var express = require('express');
var parser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 8000;

var options = {
  dotfiles: 'ignore',
  extensions: ['html'],
  redirect: false
};

app.use(express.static(__dirname + '/../app', options));


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});