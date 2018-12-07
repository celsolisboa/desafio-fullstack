var mysql      = module.exports = require('mysql');

//start mysql connection
var connection = module.exports =  mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : '', //mysql database password
  database : 'desafio' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql database...')
})