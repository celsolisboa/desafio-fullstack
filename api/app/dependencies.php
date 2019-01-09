<?php
// DIC configuration

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Cache\FilesystemCache;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\ORM\Tools\Setup;
use Slim\Container;

require_once __DIR__ . '/../vendor/autoload.php';

$container = $app->getContainer();

// -----------------------------------------------------------------------------
// Service providers
// -----------------------------------------------------------------------------
// Service factory for the ORM
$container['db'] = function ($container) {
    $capsule = new \Illuminate\Database\Capsule\Manager;
    $capsule->addConnection($container['settings']['db']);

    $capsule->setAsGlobal();
    $capsule->bootEloquent();

    return $capsule;
};
 
// -----------------------------------------------------------------------------
// Action factories
// -----------------------------------------------------------------------------


$container[AutenticacaoTokenMiddleware::class] = function ($container) {
    return new AutenticacaoTokenMiddleware($container['db']);
}; 
 

$container[App\Action\UsuarioLogar::class] = function ($container) {
    return new App\Action\UsuarioLogar($container['db']);
};

$container[App\Action\CursoListar::class] = function ($container) {
    return new App\Action\CursoListar($container['db']);
};

$container[App\Action\VerificarToken::class] = function ($container) {
    return new App\Action\VerificarToken($container['db']);
};
 
