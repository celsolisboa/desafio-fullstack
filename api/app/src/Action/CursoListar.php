<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Helper\FuncoesHelper;
use \App\Entity\Curso;
use \App\Entity\CursoProfessor;
use \App\Service\CursoService;

class CursoListar
{ 
     

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{ 
			$cursos = Curso::all();  
	    	
			$listaCursos = [];
			foreach($cursos as $curso){  
				$listaCursos['curso'] = $curso->toArray();
				$listaCursos['curso']['professores'] = $curso->professores->toArray();
				$listaCursos['curso']['salas'] = $curso->salas->toArray();				   
			}     
				
			$erro = 0;
			$msg = "Lista de Cursos";
			$dados =  $listaCursos;    	 
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}              
        
        $status = $response->getStatusCode(); 
        
        return  FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
