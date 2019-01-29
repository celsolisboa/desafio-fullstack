<?php
/*
*Efetua o controle path
*/
require_once("path.php");

/*
*Efetua a montagem das telas do sistema
*/
require_once("database/painel.php");

class controller_painel	{
	/*Retorna o USERNAME digitado no site*/
	public function controllersPainelPostUsername()	{		
		return (!empty($_POST['username']))		?	addslashes($_POST['username'])		:	null;
	}
	
	/*Retorna o campo que foi selecionado para troca de username*/
	public function controllersPainelPostSenha()		{		
		return (!empty($_POST['senha']))	?	addslashes($_POST['senha'])	:	null;
	}
	/*Termino*/

	/*função para validar usuário e senha*/
	function controllersPainelValidaUsuario()	{
		/*Chamar os Database Login*/
		$objDatabasePainelUsername		= new database_painel();

		$postUserName	=	controller_painel::controllersPainelPostUsername();
		
		$postSenha		=	controller_painel::controllersPainelPostSenha();
		
		$postCodSenha	=	crypt($postSenha);

		/*Destroi as sessoes para atualizações deslogar o usuário*/
		unset($_SESSION["acesso"]);	
		unset($_SESSION["admin"]);
		unset($_SESSION["userid"]);		
		/*Termino*/

		/*Cria a sessão de acesso e com as informações*/
		$result	= $objDatabasePainelUsername->databaseValidaUsuario($postUserName, $postCodSenha);

		$row	= mysqli_fetch_assoc($result);
		
		$_SESSION["acesso"]			= 1;
		$_SESSION["admin"]			= $row['admin'];
		$_SESSION["userid"]			= $row['id'];
		
		/*Valida se o usuário é admnistrador*/
		$admin	= $objDatabasePainelUsername->databasePainelAcessoAdmin($_SESSION["userid"]);
		
		$_SESSION["admin"]	= $admin;
		/*termino*/
	}
}
?>