<?php
namespace App\Service;

use \App\Entity\Curso;
use \App\Entity\CursoProfessor; 

class CursoProfessorService{ 
	
	private $cursoProfessor;
	
    public function __construct( CursoProfessor $cursoProfessor ){
       $this->cursoProfessor = $cursoProfessor;        
    }
    
    public function excluir($curso_id){
    	
    	$cursos = CursoProfessor::where('curso_id', $curso_id)->get();
    	
    	foreach($cursos as $curso){
			$curso->delete();
		}
	}
	
    public function salvar(){    	
    	return $this->cursoProfessor->save();		
	}
     
}