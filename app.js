var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// simple middleware function
/*
var logger = function(req, res, next) {
  console.log('logging...');
}
app.use(logger);
*/

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Server started on Port 3000...');
});
