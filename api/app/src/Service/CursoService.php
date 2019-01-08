<?php
namespace App\Service;

use \App\Entity\Curso;
use \App\Entity\CursoProfessor;
use \App\Entity\CursoSala; 

class CursoService{ 

    public function __construct( Curso $curso ){
       $this->curso = $curso;        
    }
    
    public function getProfessores( Curso $curso ) : Curso{ 
		//$lista = $this->em->getRepository('\App\Entity\CursoProfessor')->findBy( array('curso' => $curso->getId() ) ); 
		
		$lista = CursoProfessor::where('curso_id' ,$curso->getId())->get();
		$curso->setProfessores( $lista );		
		return $curso;
	}
	
	public function getSalas( Curso $curso ) : Curso{ 
		//$lista = $this->em->getRepository('\App\Entity\CursoSala')->findBy( array('curso' => $curso->getId() ) ); 
		$lista = CursoSala::where('curso_id' ,$curso->getId())->get();
		$curso->setSalas($lista);		 	
		return $curso;
	}
    
    public function listar($id = null) {
		if( $id ){
			return Curso::find($id);
		}else{
			return Curso::All();
			 
		}
	}
     
}