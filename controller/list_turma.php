<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/list_turma.php");

class controller_listTurma	{
	/*Retorna a menssagem de sucesso*/
	public function controllerListTurmaGetSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/
	
	/*função para Listar as Salas*/
	function controllersListTurmaListSala($rowTurma = null)	{
		$objDatabaseListTurma	= new database_listTurma();

		$result		= 	$objDatabaseListTurma->databaseListTurmaListSala($rowTurma);		

		return $result;
	}
	
	/*função Listar turma*/
	public function controllerListTurma()	{		
		/*Chamar os Database Login*/
		$objDatabaseListTurma	= new database_listTurma();

		$result	= $objDatabaseListTurma->databaseListTurma();

		return $result;
	}
}
?>