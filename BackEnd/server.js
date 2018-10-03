const restify = require('restify');
      server = restify.createServer();
      cursos = require('./api/controllers/cursos.controller')


server.name = 'Teste123'
function temNome(req, res, next) {
  if (req.params.nome === 'Iago') {
    next();
  }
  else res.send('Inválido')
}
function resposta(req, res, next) {
  res.send(
    { mensagem: `Hello World XXX, ${req.params.nome}`},
    );
  next();
}


server.get('/mensagem/:nome', temNome, resposta);

server.get('/teste/:destino', cursos.loging)
 

server.listen(3000, () => {
  console.log("Servidor em pé", server.name + '----' +  server.url);
  
});