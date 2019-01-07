<?php
// Routes

$app->get('/usuario/logar', App\Action\UsuarioLogar::class);


$app->get('/usuario/logar2', function(){})->add( AutenticacaoTokenMiddleware::class );
