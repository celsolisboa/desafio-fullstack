<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/list_pessoa.php");

class controller_listPessoa	{
	/*Retorna a menssagem de sucesso*/
	public function controllerListPessoaGetSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/
	
	/*Verifica se é administrador*/
	public function controllerListPessoaVerificaAdmin($rowUsuarioId	= null)	{
		/*Chamar os Database Login*/
		$objDatabaseListPessoa	= new database_listPessoa();

		$result	= $objDatabaseListPessoa->databaseListPessoaVerificaAdmin($rowUsuarioId);

		return $result;
	}
	
	/*função Listar pessoa*/
	public function controllerListPessoa()	{		
		/*Chamar os Database Login*/
		$objDatabaseListPessoa	= new database_listPessoa();

		$result	= $objDatabaseListPessoa->databaseListPessoa();

		return $result;
	}
}
?>