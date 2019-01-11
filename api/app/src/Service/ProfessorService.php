<?php
namespace App\Service;

use \App\Entity\Professor;
 

class ProfessorService{  
    
    private $professor;
	
    public function __construct( Professor $professor ){
       $this->professor = $professor;        
    }
    
    public function listar($id = null) {
		if( $id ){
			return Professor::where('id', $id)->get();
		}else{
			return Professor::all();			 
		}
	}
     
}