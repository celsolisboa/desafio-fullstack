<?php
namespace App\Service;

use \App\Entity\Sala;
 

class SalaService{  
    
    private $sala;
	
    public function __construct( Sala $sala ){
       $this->sala = $sala;        
    }
    
    public function listar($id = null) {
		if( $id ){
			return Sala::where('id', $id)->get();
		}else{
			return Sala::all();			 
		}
	}
     
}