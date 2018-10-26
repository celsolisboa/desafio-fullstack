'use strict'

const restify = require('restify');

const config = require('./config');

const mongodb = require('mongodb').MongoClient

/* const cursos = require('./api/controllers/cursos.controller')
const login = require('./api/controllers/login.controller')
 */

const server = restify.createServer({

  name: config.name,
  version: config.version
});


server.use(restify.plugins.jsonBodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.fullResponse())


/* server.name = 'Celso Lisboa' */

/* server.get('/login/usuario/:usuario/senha/:senha', login.doLogin)
server.post('/login/verificarToken', login.verifyLogin)
server.post('/login/getToken/:token', login.teste)
server.post('/login/getTokenDecoded/:token/', login.teste)
server.get('/cursos/listar', cursos.listarCurso)
server.get('/cursos/criar/id/:id/sala/:sala/professor/:professor/materia/:materia/horaInicial/:horaInicial/horaFinal/:horaFinal', cursos.criarCurso)
server.get('/cursos/editar/id/:id/sala/:sala/professor/:professor/materia/:materia/horaInicial/:horaInicial/horaFinal/:horaFinal', cursos.atualizarCurso)
server.get('/cursos/getgrafico', cursos.grafico) */

server.listen(config.port, () => {
  console.log("Servidor em pé", server.name + '----' + server.url);
  mongodb.connect(config.db.uri, (err, db) => {

    if (err) {
      console.log('An error occurred while attempting to connect to MongoDB', err)
      process.exit(1)
    }
    console.log(
      '%s v%s ready to accept connections on port %s in %s environment.',
      server.name,
      config.version,
      config.port,
      config.env
    )
    db.db('') 
    require('./route')({ db, server })
    /* require('./api/controllers/cursos.controller')({ db, server })
    require('./api/controllers/login.controller')({ db, server }) */
  })
})