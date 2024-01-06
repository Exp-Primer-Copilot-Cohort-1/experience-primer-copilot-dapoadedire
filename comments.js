  // Create web server
  var express = require('express');
  var app = express();
  var bodyParser = require('body-parser');
  var fs = require('fs');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Create database variable
  var dataFile = 'comments.json';

  // Create database
  var comments = [];
  if (fs.existsSync(dataFile)) {
    comments = JSON.parse(fs.readFileSync(dataFile));
  }

  // Create server
  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Comments server listening at http://%s:%s', host, port);
  });

  // Create routes
  app.get('/comments', function (req, res) {
    res.send(comments);
  });

  app.post('/comments', function (req, res) {
    var comment = {
      id: Date.now(),