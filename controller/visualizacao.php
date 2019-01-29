<?php
/*
*Efetua o controle path
*/
require_once("database/visualizacao.php");

class controller_visualizacao	{	
	/*retorna a mensagem de ERRO de cadastro*/
	public function controllersVisualizacaoValidaError()	{
		/*Database Login*/
		$objDatabaseVisualizacao		= new database_visualizacao();		

		/*função para validar usuário e senha retorna mensagem de erro*/
		$result		= 	$objDatabaseVisualizacao->databaseVisualizacao();		

		$row		= mysqli_fetch_assoc($result);

		$rowTurmaId	= $row['id'];

		/*mensagem de erro se não houver curso cadastrado*/
		if (empty($rowTurmaId))	{
			$erroAlteracao	= "<div class='alert alert-warning' role='alert'>Não existe nenhum </strong> Curso <strong>   cadastrado!</div><p></p>";
		}
	
		/*tratamento de notice*/
		$erroAlteracao	= !empty($erroAlteracao)? $erroAlteracao : null;		

		print($erroAlteracao);
	}
	/*termino*/

	/*função para Listar as Salas*/
	function controllersVisualizacaoListSala($rowTurma = null)	{
		$objDatabaseVisualizacao	= new database_visualizacao();

		$result		= 	$objDatabaseVisualizacao->databaseVisualizacaoListSala($rowTurma);		

		return $result;
	}
	
	/*função para visualização*/
	function controllersVisualizacao()	{
		$objDatabaseVisualizacao	= new database_visualizacao();

		$result		= 	$objDatabaseVisualizacao->databaseVisualizacao();		

		return $result;
	}
}
?>