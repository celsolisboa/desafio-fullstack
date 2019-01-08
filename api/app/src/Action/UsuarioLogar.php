<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Doctrine\ORM\EntityManager;
use \App\Entity\Usuario;
use \App\Service\UsuarioService;
use \App\Helper\FuncoesHelper;

class UsuarioLogar
{ 
   
 

    public function __invoke(Request $request, Response $response, $args)
    {
    	try{
    		$email = $request->getParam("email");
	    	$senha = $request->getParam("senha");
	    	 
	        $usuario = new Usuario();
	        $usuario->setEmail($email);
	        $usuario->setSenha($senha);         
        
        	$us = new \App\Service\UsuarioService( $usuario );
        	$token = $us->logar();  
        	 
        	
        	if( $token ){				
				$erro = 0;
        		$msg = "Usuário Logado com Sucesso!";
        		$dados = ['token'=>$token];
			}
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}               
        
        $status = $response->getStatusCode();
        
        return FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
