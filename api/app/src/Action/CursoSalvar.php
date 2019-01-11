<?php
namespace App\Action;
 
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Query\Builder;
use \App\Helper\FuncoesHelper;
use \App\Entity\Curso; 
use \App\Entity\CursoSala;
use \App\Entity\CursoProfessor;
use \App\Entity\Disciplina;
use \App\Service\CursoService;
use \App\Service\CursoSalaService;
use \App\Service\CursoProfessorService;
use \App\Service\DisciplinaService;


class CursoSalvar
{    

    public function __invoke(Request $request, Response $response, $args)
    { 
    	try{
    		
    		$strParam = $request->getBody()->getContents();
    		parse_str($strParam, $arrParam);
    	     		
    		$id = isset($arrParam['id']) ? $arrParam['id'] : null;  
    		
    		
    		
    		$curso = new Curso();
    		
    		if( $id ){ 					
				$cursoExistente = new CursoService(new Curso());
				$curso = $cursoExistente->listar($id)[0];			
			}  	
				
			$disciplina = new Disciplina();
			$disciplinaService = new DisciplinaService($disciplina);
			$disciplinaExistente = $disciplinaService->listarPorNome( trim($arrParam['nome']) );
			
			if( $disciplinaExistente ){
				$disciplina = $disciplinaExistente;				
			}
			$disciplina->nome = trim($arrParam['nome']);			
    		$disciplinaService = new DisciplinaService($disciplina);
    		$disciplinaService->salvar();
			
    		
    		$curso->id = $id;
    		$curso->disciplina_id = $disciplina->id;
    		$curso->horario_inicio = $arrParam['inicio'];
    		$curso->horario_fim = $arrParam['fim'];    		
    		 
    		$cursoService = new CursoService($curso);    		
			$cursoService->salvar(); 
			
			if( $curso->id ){
				
				
				$cursoSalaService = new CursoSalaService(new CursoSala());
				$cursoSalaService->excluir($curso->id);
				foreach( $arrParam['salas'] as $sala_id ){
					$cursoSala = new CursoSala();					
					$cursoSala->curso_id = $curso->id;
					$cursoSala->sala_id = $sala_id;
					
					$cursoSalaService = new CursoSalaService($cursoSala); 
					$cursoSalaService->salvar();					
				}
				
				$cursoProfessorService = new CursoProfessorService(new CursoProfessor());
				$cursoProfessorService->excluir($curso->id);
				foreach( $arrParam['professores'] as $professor_id ){
					$cursoProfessor = new CursoProfessor();
					$cursoProfessor->curso_id = $curso->id;
					$cursoProfessor->professor_id = $professor_id;
					
					$cursoProfessorService = new CursoProfessorService($cursoProfessor); 
					$cursoProfessorService->salvar();					
				}			
			}else{
				$erro = 1;
				$msg = "Ocorreu um erro ao salvar o curso.";
				$dados = [];
			}    	    
				
			$erro = 0;
			$msg = "O curso foi salvo com sucesso!";
			$dados =  $curso->id;    	 
			
		}catch( \Exception $e ){
			$erro = 1;
			$msg = $e->getMessage();
			$dados = [];			
		}              
        
        $status = $response->getStatusCode(); 
        
        return  FuncoesHelper::formatarSaidaJson($status, $msg, $dados, $erro);
    }
}
