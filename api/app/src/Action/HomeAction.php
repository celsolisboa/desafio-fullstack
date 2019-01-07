<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Doctrine\ORM\EntityManager;
use \App\Entity\Usuario;
use \App\Service\UsuarioService;

final class HomeAction
{ 
    private $em;

    public function __construct(  EntityManager $em)
    { 
        $this->em = $em;
    }

    public function __invoke(Request $request, Response $response, $args)
    {
        $usuario = new Usuario();
        $usuario->setEmail('thiago.boo@gmail.com');
        $usuario->setSenha('1234567');
        
        $us = new \App\Service\UsuarioService($usuario, $this->em);
        var_dump( $us->logar() );        
        
              
         
        return $response;
    }
}
