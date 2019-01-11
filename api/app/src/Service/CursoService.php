<?php
namespace App\Service;

use \App\Entity\Curso;
use \App\Entity\CursoProfessor;
use \App\Entity\CursoSala; 

class CursoService{ 
	
	private $curso;
	
    public function __construct( Curso $curso ){
       $this->curso = $curso;        
    }
    
    public function getProfessores( Curso $curso ){ 
		//$lista = $this->em->getRepository('\App\Entity\CursoProfessor')->findBy( array('curso' => $curso->getId() ) ); 
		
		$lista = CursoProfessor::where('curso_id' ,$curso->getId())->get();
		$curso->setProfessores( $lista );		
		return $curso;
	}
	
	public function getSalas( Curso $curso ) { 
		//$lista = $this->em->getRepository('\App\Entity\CursoSala')->findBy( array('curso' => $curso->getId() ) ); 
		$lista = CursoSala::where('curso_id' ,$curso->getId())->get();
		$curso->setSalas($lista);		 	
		return $curso;
	}
    
    public function listar($id = null) {
		if( $id ){
			return Curso::with("Disciplina")->where('id',$id)->get();
		}else{
			return Curso::with("Disciplina")->get();			 
		}
	}
	
	public function salvar(){		 
		 
		$retorno = $this->curso->save();
		  		
		return $retorno;
	}
	
	public function excluir($id)  {
		$retorno = false;
		if( $id ){
			 
			$curso = Curso::find($id);
			if($curso){
				$retorno = $curso->delete();
				
				if( ! $retorno ){
					throw new \Exception("Erro ao excluir o curso.");					
				}				 
			}
				
			  
		}
		return $retorno;
	}
     
}