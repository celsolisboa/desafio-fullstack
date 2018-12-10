/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + "/view/login.html", function(err, data){
        response.end(data);
    });
});
server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

*/
require('./api/index.js'); // pass passport for configuration
require('./routes/index.js'); // pass passport for configuration

