<?php
namespace App\Action; 
 
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Entity\Usuario;
use \App\Service\UsuarioService;
use \App\Helper\FuncoesHelper;

class VerificarToken
{ 

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{     	
    		$email = isset( $request->getHeader("email")[0] ) ? $request->getHeader("email")[0] : '';
	    	$token = isset( $request->getHeader("token")[0] ) ? $request->getHeader("token")[0] : '';
	    	 
	    	 
	    	$usuario = new Usuario();
	    	$usuario->email = $email;
	    	$usuario->token = $token; 
	    	
	    	$usuarioService =  new UsuarioService( $usuario );
	    	
	    	$verificado = $usuarioService->verificarToken();
	    	  
			$erro = 0;
			$msg = "Usuário Verificado";
			$dados =  [];  
			 			  	 
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}              
        
        $status = $response->getStatusCode(); 
        
        return  FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
