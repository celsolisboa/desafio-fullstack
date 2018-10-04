const restify = require('restify');
const server = restify.createServer();
const cursos = require('./api/controllers/cursos.controller');
var login = require('./api/controllers/login.controller');

server.name = 'Teste123'

/* server.get('/mensagem/:nome', temNome, resposta); */

server.get('/login/usuario/:usuario/senha/:senha', login.doLogin)
server.get('/cursos/listar', cursos.list)

server.listen(3000, () => {
  console.log("Servidor em pé", server.name + '----' + server.url);

});