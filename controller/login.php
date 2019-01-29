<?php
/*
*Efetua o controle path
*/
require_once("database/login.php");

/*
*Efetua a montagem das telas do sistema
*/
require_once("database/login.php");

class controller_login	{
	/*Retorna o USERNAME digitado no site*/
	public function controllersLoginPostUsername()	{		
		return (!empty($_POST['username']))		?	addslashes($_POST['username'])		:	null;
	}
	
	/*Retorna o SENHA digitado no site*/
	public function controllersLoginPostSenha()		{		
		return (!empty($_POST['senha']))	?	addslashes($_POST['senha'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a permissão de salvar o formulário*/
	public function controllersLoginPostSalvar()		{		
		return (!empty($_POST['salvar']))	?	addslashes($_POST['salvar'])	:	null;
	}
	/*Termino*/
	
	/*retorna a mensagem de ERRO de cadastro*/
	public function controllersLoginValidaError()	{
		/*Retorna o USERNAME digitado no site*/
		$postUserName	=	controller_login::controllersLoginPostUsername();		
		/*Retorna o SENHA digitado no site*/
		$postSenha		=	controller_login::controllersLoginPostSenha();
		/*Retorna a permissão de salvar o formulário*/
		$postSalvar		=	controller_login::controllersLoginPostSalvar();

		/*Database Login*/
		$objDatabaseLoginUsername		= new database_login();		

		/*função para validar usuário e senha retorna mensagem de erro*/
		$result		= 	$objDatabaseLoginUsername->databaseLoginValidaUsuario($postUserName);		

		$row		= mysqli_fetch_assoc($result);

		$rowSenha	= $row['senha'];

		/*mensagem de erro se o username vier vazio*/
		if (empty($postUserName)	AND	!empty($postSalvar)	AND	empty($erroAlteracao))	{
			$erroAlteracao	= "<div class='alert alert-danger' role='alert'>O campo </strong> username <strong> é de preenchimento obrigatório!</div><p></p>";
		}

		/*mensagem de erro se a senha vier vazio*/
		if (empty($postSenha)	AND	!empty($postSalvar)	AND	empty($erroAlteracao))		{
			$erroAlteracao	= "<div class='alert alert-danger' role='alert'>O campo </strong> senha <strong> é de preenchimento obrigatório!</div><p></p>";
		}

		/*Retorna a permissão para mensagem de error de login*/
		if ((!empty($postUserName) AND !empty($postSenha)) AND (empty($rowSenha) OR (sha1($postSenha) != $rowSenha)))		{
			$erroAlteracao	= "<div class='alert alert-danger' role='alert'>O campo </strong> Usuário ou senha <strong> estão incorretos!</div><p></p>";
		}

		/*tratamento de notice*/
		$erroAlteracao	= !empty($erroAlteracao)? $erroAlteracao : null;		

		print($erroAlteracao);
	}
	/*termino*/

	/*Valida senha e o usuário*/
	function controllersLoginValidaUsuario()	{
		/*Chamar os Database Login*/
		$objDatabaseLogin		= new database_login();
		/*Retorna o USERNAME digitado no site*/
		$postUserName	=	controller_login::controllersLoginPostUsername();		
		/*Retorna o SENHA digitado no site*/
		$postSenha		=	controller_login::controllersLoginPostSenha();	
		
		/*Destroi as sessoes para atualizações deslogar o usuário*/
		$_SESSION["admin"]	= null;
		$_SESSION["userid"]	= null;		
		/*Termino*/
		
		$result		= 	$objDatabaseLogin->databaseLoginValidaUsuario($postUserName);		
		
		$row		= mysqli_fetch_assoc($result);

		$rowSenha	= $row['senha'];
		
		/*valida acesso do usuário com a senha*/
		if (sha1($postSenha) === $rowSenha	AND	!empty($postUserName)	AND	!empty($postSenha))	{
			$rowUsuarioId	= $row['id'];

			$_SESSION["userid"]	= $rowUsuarioId;

			$result		= 	$objDatabaseLogin->databaseLoginAcessoAdmin($rowUsuarioId);

			if (!empty($result))	{
				$row		= mysqli_fetch_assoc($result);

				if (!empty($row['id']))	{
					$_SESSION["admin"]	= $row['id'];
					
					$redirect	= "?pn=1";
					$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
					$HTML		.= "<script language='JavaScript'>";
					$HTML		.= "location.href='".$redirect."';";
					$HTML		.= "</script>";
					print($HTML);
				}
			}

			$redirect	= "?v=1";
			$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
			$HTML		.= "<script language='JavaScript'>";
			$HTML		.= "location.href='".$redirect."';";
			$HTML		.= "</script>";
			print($HTML);
		} 
	}
}
?>