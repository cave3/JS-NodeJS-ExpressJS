var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'app')));

var users = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email:  'jdoe@gmail.com',
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Smith',
    email:  'bsmith@gmail.com',
  },
  {
    id: 3,
    first_name: 'Jill',
    last_name: 'Jackson',
    email:  'jjackson@gmail.com',
  }
];

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Customers',
    users: users
  });
});

app.listen(3000, function() {
  console.log('Server started on Port 3000...');
});
