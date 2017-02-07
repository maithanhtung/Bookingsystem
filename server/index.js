
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var dbURL = 'mongodb://emxin300:Nhatlinh2304@ds135049.mlab.com:35049/phobooking';


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// Mlab
// mongoose.connect(dbURL, function(err) {
//     if (err) throw err;
//     console.info('Connected to database');
// });

// MongoDB

mongoose.connect('mongodb://maithanhtung:Nhatlinh2304@ds135049.mlab.com:35049/phobooking');
mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + './../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./api/appointment/'));

// Start server
var port = process.env.PORT || 8080
, ip = "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
