<?php
// Routes

$app->get('/usuario/logar', App\Action\UsuarioLogar::class);
$app->get('/usuario/verificarToken', App\Action\VerificarToken::class);
$app->get('/curso/listar[/{id}]', App\Action\CursoListar::class)->add( AutenticacaoTokenMiddleware::class );
