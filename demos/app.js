var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use('/', express.static(__dirname + '/build'));
app.set('staticUrl', 'http://localhost:3000');

app.get('/jquery', function (req, res) {
  res.render('jquery');
});

app.get('*', function (req, res) {
  res.render('app');
});

app.listen('8000');