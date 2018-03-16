var configValues = require('./config.json');
var mysql= require('mysql');

var con=mysql.createConnection({
    user:configValues.uname,
    password:configValues.pwd,
    database:configValues.database
});

module.exports = con;