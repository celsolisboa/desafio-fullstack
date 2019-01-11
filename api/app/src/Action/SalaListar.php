<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Helper\FuncoesHelper;
use \App\Entity\Sala; 
use \App\Service\SalaService;

class SalaListar
{      

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{
    		
    		$id = isset($args['id']) ? $args['id'] : null;
    		
    		$sala = new Sala();
    		
    		$salaService = new SalaService($sala);
    		$salas = $salaService->listar();
				
			$erro = 0;
			$msg = "Lista de Salas";
			$dados =  $salas;    	 
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}              
        
        $status = $response->getStatusCode(); 
        
        return  FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
