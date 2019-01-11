<?php
namespace App\Service;

use \App\Entity\Disciplina; 

class DisciplinaService{ 
	
	private $disciplina;
	
    public function __construct( Disciplina $disciplina ){
       $this->disciplina = $disciplina;        
    }
    
    public function listarPorNome($nome) {
		$disciplina = Disciplina::where('nome', $nome)->first();
		
		return $disciplina;
	}
     
	
	public function salvar(){		 
		 
		$retorno = $this->disciplina->save();
		  		
		return $retorno;
	}
	
	 
}