<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Helper\FuncoesHelper;
use \App\Entity\Professor; 
use \App\Service\ProfessorService;

class ProfessorListar
{ 
     

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{
    		
    		$id = isset($args['id']) ? $args['id'] : null;
    		
    		$professor = new Professor();
    		
    		$professorService = new ProfessorService($professor);
    		$professores = $professorService->listar();
				
			$erro = 0;
			$msg = "Lista de Professores";
			$dados =  $professores;    	 
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}              
        
        $status = $response->getStatusCode(); 
        
        return  FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
