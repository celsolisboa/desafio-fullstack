const restify = require('restify');
const server = restify.createServer();
const cursos = require('./api/controllers/cursos.controller');
var login = require('./api/controllers/login.controller');

server.name = 'Celso Lisboa'

server.get('/login/usuario/:usuario/senha/:senha', login.doLogin)
server.post('/login/verificarToken', login.verifyLogin)
server.post('/login/getToken/:token', login.teste)
/* server.post('/login/getTokenDecoded/:token/', login.teste) */
server.get('/cursos/listar', cursos.listarCurso)
server.get('/cursos/criar/id/:id/sala/:sala/professor/:professor/materia/:materia/horaInicial/:horaInicial/horaFinal/:horaFinal', cursos.criarCurso)
server.get('/cursos/editar/id/:id/sala/:sala/professor/:professor/materia/:materia/horaInicial/:horaInicial/horaFinal/:horaFinal', cursos.atualizarCurso)
server.get('/cursos/getgrafico', cursos.grafico)

server.listen(3000, () => {
  console.log("Servidor em pé", server.name + '----' + server.url);

});
