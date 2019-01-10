<?php
// Routes

$app->get('/usuario/logar', App\Action\UsuarioLogar::class);
$app->get('/usuario/verificarToken', App\Action\VerificarToken::class);
$app->get('/cursos', App\Action\CursoListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->get('/curso/{id}', App\Action\CursoListar::class)->add( AutenticacaoTokenMiddleware::class );
$app->delete('/curso[/{id}]', App\Action\CursoExcluir::class)->add( AutenticacaoTokenMiddleware::class );