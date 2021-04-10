var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost', //http://localhost:3003/
  port:'3003',
  user:'root',
  password: 'ape',
})

connection.connect( (err)=> {
  err ? console.log('error connecting, db.js') : console.log('connected ' + connection.threadId);
})

module.exports = connection;