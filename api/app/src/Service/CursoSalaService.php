<?php
namespace App\Service;

use \App\Entity\Curso;
use \App\Entity\CursoProfessor;
use \App\Entity\CursoSala; 

class CursoSalaService{ 
	
	private $cursoSala;
	
    public function __construct( CursoSala $cursoSala ){
       $this->cursoSala = $cursoSala;        
    }
    
    public function excluir($curso_id){
    	
    	$cursos = CursoSala::where('curso_id', $curso_id)->get();
    	
    	foreach($cursos as $curso){
			$curso->delete();
		}
	}
    
    public function salvar(){
    	 
    	return $this->cursoSala->save();
		
	}
     
}