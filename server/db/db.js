var mysql = require('mysql');
var connection = mysql.createConnection({
  //host: 'localhost', //http://localhost:3003/
  user:'root',
  password: 'ape',
  database: 'cows'
})

connection.connect( (err)=> {
  err ? console.error('error connecting, db.js') : console.log('connected to db');
})


module.exports = connection;