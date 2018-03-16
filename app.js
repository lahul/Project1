var express = require('express');
var app=express();
var con = require('./config');
var router = express.Router();
var route=require('./routes/routes.js');


var port = process.env.port || 3000;

app.use('/assets',express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

con.connect();

require('./routes/routes.js')(app);

app.listen(port);