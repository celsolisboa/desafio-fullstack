<?php
namespace App\Controller;

use Slim\Views\Twig;
use Psr\Log\LoggerInterface;
use Slim\Http\Request;
use Slim\Http\Response;
use Doctrine\ORM\EntityManager;
use \App\Entity\Usuario;
use \App\Service\UsuarioService;

class UsuarioController
{ 
    private static $em;

    public function __construct( EntityManager $em )
    { 
    var_dump($em);
        self::$em = $em;
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
    
    public static function logar(Request $request, Response $response, $args){
		
		/*
		$email = $request->getAttribute('email');
		$senha = $request->getAttribute('senha');
		*/
		
		$usuario = new Usuario();
        $usuario->setEmail('thiago.boo@gmail.com');
        $usuario->setSenha('1234567');
        
        $us = new \App\Service\UsuarioService($usuario, self::$em);
        var_dump( $us->logar() );
	}
}
