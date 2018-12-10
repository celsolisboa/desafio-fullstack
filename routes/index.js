var app = require('../config/app_config.js');

var path = require('path');


app.get('/Cursos/detalhes', function (req, res) {
 	return res.sendFile(path.resolve('./view/detalhes.html'))
});

app.get('/', function (req, res) {
 	return res.sendFile(path.resolve('./view/login.html'))
});

app.get('/login', function (req, res) {
 	return res.sendFile(path.resolve('./view/login.html'))
});

app.get('/Cursos', function (req, res) {
 	return res.sendFile(path.resolve('./view/curso.html'))
});