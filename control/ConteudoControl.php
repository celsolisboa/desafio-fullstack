<?php
include '../../model/Conteudo.php';

class ConteudoControl{
	function insert($obj){
		$conteudo = new Conteudo();
		//echo $obj->titulo;
		return $conteudo->insert($obj);
		header('Location:listar.php');
	}

	function update($id){
		$conteudo = new Conteudo();
		return $conteudo->update($id);
	}

	function delete($id){
		$conteudo = new Conteudo();
		return $conteudo->delete($id);
	}

	function find($id = null){

	}

	function findProfessores(){
		$conteudo = new Conteudo();
		return $conteudo->findProfessores();
	}

	function findSalas(){
		$conteudo = new Conteudo();
		return $conteudo->findSalas();
	}

	function findAll(){
		$conteudo = new Conteudo();
		return $conteudo->findAll();
	}
}

?>