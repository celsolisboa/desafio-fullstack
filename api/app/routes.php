<?php
// Routes

$app->get('/usuario/logar', App\Action\UsuarioLogar::class);


$app->get('/curso/listar', App\Action\CursoListar::class)/*->add( AutenticacaoTokenMiddleware::class )*/;
