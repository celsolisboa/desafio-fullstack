<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/cad_pessoa.php");

class controller_cadPessoa	{
	/*Retorna o NOME digitado para cadastro do comprador*/
	public function controllersCadPessoaPostNome()	{		
		return (!empty($_POST['nome']))		?	addslashes($_POST['nome'])		:	null;
	}

	/*Retorna o EMAIL digitado para cadastro do comprador*/
	public function controllersCadPessoaPostEmail()		{		
		return (!empty($_POST['email']))	?	addslashes($_POST['email'])	:	null;
	}
	/*Termino*/

	/*Retorna o CELULAR digitado para cadastro do comprador*/
	public function controllersCadPessoaPostCelular()		{		
		return (!empty($_POST['celular']))	?	addslashes($_POST['celular'])	:	null;
	}
	/*Termino*/

	/*Retorna a Senha*/
	public function controllersCadPessoaPostSenha()		{		
		return (!empty($_POST['senha']))		?	addslashes($_POST['senha'])	:	null;
	}
	/*Termino*/

	/*Retorna a repeticao da senha*/
	public function controllersCadPessoaPostRepSenha()		{		
		return (!empty($_POST['rep_senha']))	?	addslashes($_POST['rep_senha'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a permissão de salvar o formulário*/
	public function controllersCadPessoaPostSalvar()		{		
		return (!empty($_POST['salvar']))	?	addslashes($_POST['salvar'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a menssagem de sucesso*/
	public function controllersCadPessoaSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/
	
	/*Retorna se o usuário esta logado e se é administrador*/
	public function controllersCadPessoaSessAdmin()		{		
		return (!empty($_SESSION['admin']))	?	addslashes($_SESSION['admin'])	:	null;
	}
	/*Termino*/
	
	/*retorna a mensagem de ERRO de cadastro*/
	private function controllersCadPessoaError($postNome	= null, $postEmail = null, $postSenha	= null, $postRepSenha = null,  $postSalvar = null)	{		
		/*Chamar os Database*/
		$objDatabaseCadPessoa	= new database_cadPessoa();
		
		if (empty($postNome)	AND	!empty($postSalvar))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> nome <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (empty($postEmail)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> email <strong> é de preenchimento obrigatório!</div><p></p>";
		}		
		
		if (empty($postSenha)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> senha <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (strlen($postSenha) < 6	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>Campo <strong>senha</strong> está com menos de 6 dígitos!</div><p></p>";
		}
		
		if (strlen($postSenha) > 10	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>Campo <strong>senha</strong> está com mais de 10 dígitos!</div><p></p>";
		}
		
		if (empty($postRepSenha)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> repetir senha <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (!empty($postEmail)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			/*Verifica se o cadastro do usuário já existe com mesmo EMAIL*/
			$result	= $objDatabaseCadPessoa->databaseCadPessoaEmail($postEmail);

			$row	= mysqli_fetch_assoc($result);

			$rowNomeId	= $row['id'];
			
			if (!empty($rowNomeId))	{
				$erroCadastro	= "<div class='alert alert-danger' role='alert'>Não foi possível efetuar o cadastro, <strong>E-mail</strong> já cadastrado com outro usuário no sistema!</div><p></p>";
			}
		}
		
		if ($postSenha != $postRepSenha	AND	!empty($postSalvar) AND empty($erroCadastro))			{
				$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo <strong>senha</strong> e <strong>repetir senha</strong> estão diferentes!</div>";
		}

		/*tratamento de notice*/
		$erroCadastro	= !empty($erroCadastro)? $erroCadastro : null;

		return $erroCadastro;
	}
	/*termino*/
	
	/*retorna a mensagem de CERTO de cadastro*/
	private function controllersCadPessoaCerto ($postSucesso	= null, $erroCadastro = null)	{		
		/*Chamar os Database Login*/
		$objDatabaseCadPessoa	= new database_cadPessoa();

		if (!empty($postSucesso) AND empty($erroCadastro))	{
			$certoCadastro	= "<div class='alert alert-success' role='alert'>Usuário cadastrado com sucesso!</div><p></p>";
		
			return $certoCadastro;
		}
	}
	/*termino*/
	
	/*Insere a função do usuário no banco*/
	private function controllersCadPessoaInserirUsuarioFuncao()	{		
		/*Chamar a classe do database*/
		$objDatabaseCadPessoa	= new database_cadPessoa();		
		
		$objDatabaseCadPessoa->databaseCadPessoaInserirUsuarioFuncao();
	}
	/*termino*/

	/*função Cadastrar Comprador*/
	public function controllersCadPessoa()	{
		/*Chamar os Database Login*/
		$objDatabaseCadPessoa	= new database_cadPessoa();
		/*Retorna o NOME digitado para cadastro do comprador*/
		$postNome			=	controller_cadPessoa::controllersCadPessoaPostNome();
		/*Retorna o EMAIL digitado para cadastro do comprador*/
		$postEmail			=	controller_cadPessoa::controllersCadPessoaPostEmail();
		/*Retorna o CELULAR digitado para cadastro do comprador*/
		$postCelular		=	controller_cadPessoa::controllersCadPessoaPostCelular();
		/*Retorna a Senha*/
		$postSenha			=	controller_cadPessoa::controllersCadPessoaPostSenha();
		/*Retorna a repeticao da senha*/
		$postRepSenha		=	controller_cadPessoa::controllersCadPessoaPostRepSenha();
		/*Retorna a permissão de salvar o formulário*/
		$postSalvar			=	controller_cadPessoa::controllersCadPessoaPostSalvar();
		/*Retorna a menssagem de sucesso*/
		$postSucesso		=	controller_cadPessoa::controllersCadPessoaSucesso();
		/*Retorna se o usuário esta logado e se é administrador*/
		$postSessAdmin		=	controller_cadPessoa::controllersCadPessoaSessAdmin();
		
		/*retorna a mensagem de ERRO de cadastro*/
		$erroCadastro	= controller_cadPessoa::controllersCadPessoaError($postNome, $postEmail, $postSenha, $postRepSenha, $postSalvar);
		
		print($erroCadastro);
		/*termino*/
		
		/*retorna a mensagem de CERTO de cadastro*/
		$certoCadastro	= controller_cadPessoa::controllersCadPessoaCerto($postSucesso, $erroCadastro);
		
		print($certoCadastro);
		/*termino*/

		if ((!empty($postNome) AND !empty($postEmail) AND !empty($postSenha) AND !empty($postRepSenha) AND !empty($postSalvar)) AND empty($erroCadastro))	{
			/*Insere o usuário no banco*/
			$objDatabaseCadPessoa->databaseCadPessoaInserir($postNome, $postEmail, $postCelular, $postSenha, $postRepSenha);
			
			$objDatabaseCadPessoa->databaseCadPessoaInserirUsuarioFuncao($postEmail);
			
			if (!empty($postSessAdmin))	{
				$redirect	= "?cu=1&m=1";
			} else {
				$redirect	= "?lg=1&m=1";
			}
			$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
			$HTML		.= "<script language='JavaScript'>";
			$HTML		.= "location.href='".$redirect."';";
			$HTML		.= "</script>";
			print($HTML);
		}
	}
}
?>