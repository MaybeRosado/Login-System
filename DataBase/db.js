const mysql = require('mysql');
const dotEnv = require('../config/config.js');

const connection = mysql.createConnection({
    host: dotEnv.HOST,
    user : dotEnv.USER,
    database: 'loginsystem' ,
    password: dotEnv.PASSWORD,
    port: dotEnv.PORT 
});

connection.connect();
module.exports = connection;