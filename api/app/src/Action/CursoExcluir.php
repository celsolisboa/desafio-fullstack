<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Helper\FuncoesHelper;
use \App\Entity\Curso;
use \App\Entity\CursoProfessor;
use \App\Service\CursoService;

class CursoExcluir
{ 
     

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{
    		
    		$id = isset($args['id']) ? $args['id'] : null;
    		$curso = new Curso();
    		 
    		$cursoService = new CursoService($curso);    		
			$retorno = $cursoService->excluir($id); 	    	 
				
			$erro = 0;
			$msg = "Curso Excluído com sucesso!";
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
