var express = require('express');
var dbconfiq = require('../server/db/dbconfig');
var bodyParser = require('body-parser');
let signupUser = require('../server/api/signup');
let loginUser = require('../server/api/login');
 let middleware  = require('../server/db/middleware')
 const  passport = require('passport');

var app = express();
var cors = require('cors')

var PORT = 5000;
app.use(cors())
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use('/api/registeruser', signupUser);
app.use('/api/loginuser', loginUser);


app.get('/',middleware.checkToken, function(req, res) {
  res.status(200).send('Hello world');
});

app.listen(PORT, function() {
  console.log('Server is running on PORT:', PORT);
});
