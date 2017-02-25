var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');

var db = mongojs('customerapp', ['users'])
var app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path
app.use(express.static(path.join(__dirname, 'app')));

// Global Vars
app.use(function(res, res, next){
  res.locals.errors = null;
  next();
});

// Express Validator Middleware (Form validation)
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.get('/', function(req, res) {
  // find everything
  db.users.find(function (err, docs) {
    // docs is an array of all the documents in mycollection
    //console.log(docs);

    res.render('index', {
      title: 'Customers',
      users: docs
    });

  })


});

app.post('/users/add', function(req, res){
  // express-validator
  req.checkBody('first_name', 'First Name is required').notEmpty();
  req.checkBody('last_name', 'Last Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    res.render('index', {
      title: 'Customers',
      users: users,
      errors: errors
    });
  } else {
    var newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }
    console.log('SUCCESS');
    db.users.insert(newUser, function(err, result) {
      if(err) {
        console.log(err);
      }
      //result.redirect('/');
    });
  }
});

app.listen(3000, function() {
  console.log('Server started on Port 3000...');
});
