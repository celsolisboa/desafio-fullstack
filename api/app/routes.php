<?php
// Routes

$app->get('/usuario/logar', App\Action\UsuarioLogar::class);
$app->get('/usuario/verificarToken', App\Action\VerificarToken::class);
$app->get('/cursos', App\Action\CursoListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->get('/curso/{id}', App\Action\CursoListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->delete('/curso/{id}', App\Action\CursoExcluir::class)->add( AutenticacaoTokenMiddleware::class );
$app->get('/professores', App\Action\ProfessorListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->get('/salas', App\Action\SalaListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->post('/curso', App\Action\CursoSalvar::class)->add( AutenticacaoTokenMiddleware::class );