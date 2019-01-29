<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/alt_pessoa.php");

class controller_altPessoa	{
	/*Retorna o NOME digitado para altastro do comprador*/
	public function controllersAltPessoaPostNome()	{		
		return (!empty($_POST['nome']))		?	addslashes($_POST['nome'])		:	null;
	}

	/*Retorna o EMAIL digitado para altastro do comprador*/
	public function controllersAltPessoaPostEmail()		{		
		return (!empty($_POST['email']))	?	addslashes($_POST['email'])	:	null;
	}
	/*Termino*/

	/*Retorna o CELULAR digitado para altastro do comprador*/
	public function controllersAltPessoaPostCelular()		{		
		return (!empty($_POST['celular']))	?	addslashes($_POST['celular'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a opção do campo FUNCAO*/
	public function controllersAltPessoaPostFuncao()		{		
		return (!empty($_POST['funcao']))	?	addslashes($_POST['funcao'])	:	null;
	}
	/*Termino*/
	
	/*Retorna o campo ADMIN */
	public function controllersAltPessoaPostAdmin()		{		
		return (!empty($_POST['admin']))	?	addslashes($_POST['admin'])	:	null;
	}
	/*Termino*/

	/*Retorna a Senha*/
	public function controllersAltPessoaPostSenha()		{		
		return (!empty($_POST['senha']))		?	addslashes($_POST['senha'])	:	null;
	}
	/*Termino*/

	/*Retorna a repeticao da senha*/
	public function controllersAltPessoaPostRepSenha()		{		
		return (!empty($_POST['rep_senha']))	?	addslashes($_POST['rep_senha'])	:	null;
	}
	/*Termino*/
	
	/*Retorna o ID do Usuário método POST*/
	public function controllersAltPessoaPostUserId()		{		
		return (!empty($_POST['u']))	?	addslashes(base64_decode($_POST['u']))	:	null;
	}
	/*Termino*/
	
	/*Retorna o ID do Usuário método POST*/
	public function controllersAltPessoaPostRowUserId()		{		
		return (!empty($_POST['ru']))	?	addslashes(base64_decode($_POST['ru']))	:	null;
	}
	/*Termino*/

	/*Retorna a sessão de login*/
	public function controllersAltPessoaGetUserId()		{		
		return (!empty($_GET['u']))	?	addslashes(base64_decode($_GET['u']))	:	null;
	}
	/*Termino*/

	/*Retorna a permissão de salvar o formulário*/
	public function controllersAltPessoaPostSalvar()		{		
		return (!empty($_POST['salvar']))	?	addslashes($_POST['salvar'])	:	null;
	}
	/*Termino*/

	/*Retorna a menssagem de sucesso*/
	public function controllersAltPessoaGetSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/	

	/*retorna a mensagem de ERRO de altastro*/
	private function controllersAltPessoaError($postNome	= null, $postEmail = null, $postSenha	= null, $postRepSenha = null,  $postSalvar = null, $varUserId	= null, $postRowUserId = null, $postAdmin =null)	{
		/*Chamar os Database Login*/
		$objDatabaseAltPessoa	= new database_altPessoa();
		
		/*mensagem de erro em caso de tentarem burlar o sistema alterando o HTML ou a URL*/
		if (md5($varUserId) != $postRowUserId AND !empty($postSalvar))			{
			$erroAlteracao	= "</strong> Usuário <strong> não encontrado!<p></p>";
		}
		
		if (empty($postNome)	AND	!empty($postSalvar))			{
			$erroAltastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> nome <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (empty($postEmail)	AND	!empty($postSalvar) AND empty($erroAltastro))			{
			$erroAltastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> email <strong> é de preenchimento obrigatório!</div><p></p>";
		}		
		
		if (strlen($postSenha) > 1 AND strlen($postSenha) < 6	AND	!empty($postSalvar) AND empty($erroAltastro))			{
			$erroAltastro	= "<div class='alert alert-danger' role='alert'>Campo <strong>senha</strong> está com menos de 6 dígitos!</div><p></p>";
		}
		
		if (strlen($postSenha) > 10	AND	!empty($postSalvar) AND empty($erroAltastro))			{
			$erroAltastro	= "<div class='alert alert-danger' role='alert'>Campo <strong>senha</strong> está com mais de 10 dígitos!</div><p></p>";
		}

		if ($postSenha != $postRepSenha	AND	!empty($postSalvar) AND empty($erroAltastro))			{
				$erroAltastro	= "<div class='alert alert-danger' role='alert'>O campo <strong>senha</strong> e <strong>repetir senha</strong> estão diferentes!</div>";
		}
		
		if (!empty($postEmail)	AND	!empty($postSalvar) AND empty($erroAltastro))			{
			/*Verifica se o altastro do usuário já existe com mesmo EMAIL*/
			$result	= $objDatabaseAltPessoa->databaseAltPessoaEmail($postEmail, $varUserId);

			/*retira o notice da tela*/
			if (!empty($result))	{
				$row	= mysqli_fetch_assoc($result);
			}

			$rowNomeId	= !empty($row['id'])	?	$row['id']		: null;			
			$rowNome	= !empty($row['nome'])	?	$row['nome']	: null;
			/*termino*/

			if (!empty($rowNomeId))	{
				$erroAltastro	= "<div class='alert alert-danger' role='alert'>Não foi possível efetuar o cadastro, <strong>E-mail</strong> já cadastrado com usuário <strong>".$rowNome."</strong>!</div><p></p>";
			}
		}

		if (!empty($postSalvar) AND empty($erroAltastro) AND !empty($postAdmin))	{
			$result	=	controller_altPessoa::controllersAltPessoaListaDados();

			$row	= mysqli_fetch_assoc($result);

			if ($row["funcao"] == "usuario")			{
				$erroAltastro	= "<div class='alert alert-danger' role='alert'>Este perfil de usuário não pode ser administrador!</div><p></p>";
			}
		}

		/*tratamento de notice*/
		$erroAltastro	= !empty($erroAltastro)? $erroAltastro : null;

		return $erroAltastro;
	}
	/*termino*/
	
	/*retorna a mensagem de CERTO de altastro*/
	private function controllersAltPessoaCerto ($postSucesso	= null, $erroAltastro = null)	{
		if (!empty($postSucesso) AND empty($erroAltastro))	{
			$certoAltastro	= "<div class='alert alert-success' role='alert'>Usuário alterado com sucesso!</div><p></p>";
		
			return $certoAltastro;
		}
	}
	/*termino*/
	
	/*Retorna dados do usuário para alteração*/
	public function controllersAltPessoaListaDados ()	{		
		/*Chamar os Database Login*/
		$objDatabaseAltPessoa	= new database_altPessoa();
		/*Retorna o ID do Usuário método POST*/
		$postUserId			=	controller_altPessoa::controllersAltPessoaPostUserId();
		/*Retorna o ID do Usuário método GET*/
		$getUserId			=	controller_altPessoa::controllersAltPessoaGetUserId();

		$varUserId	= (!empty($getUserId))	?	$getUserId	:	$postUserId;
		
		/*Verifica se o altastro do usuário já existe com mesmo EMAIL*/
		$result	= $objDatabaseAltPessoa->databaseAltPessoaListaDados($varUserId);

		return $result;
	}
	/*termino*/
	
	/*Lista todas as funções cadastradas*/
	public function controllersAltPessoaListaFuncao ($rowFuncaoId	= null)	{		
		/*Chamar os Database Login*/
		$objDatabaseAltPessoa	= new database_altPessoa();
		
		/*Verifica se o altastro do usuário já existe com mesmo EMAIL*/
		$result	= $objDatabaseAltPessoa->databaseAltPessoaListaFuncao($rowFuncaoId);

		return $result;
	}
	/*termino*/
	
	/*Retorna a informação se já é ADMIN*/
	public function controllersAltPessoaAdmin()	{
		/*Retorna o ID do Usuário método POST*/
		$postUserId			=	controller_altPessoa::controllersAltPessoaPostUserId();
		/*Retorna o ID do Usuário método GET*/
		$getUserId			=	controller_altPessoa::controllersAltPessoaGetUserId();

		$varUserId	= (!empty($getUserId))	?	$getUserId	:	$postUserId;
			
		/*Chamar os Database Login*/
		$objDatabaseAltPessoa	= new database_altPessoa();
		
		$result	= $objDatabaseAltPessoa->databaseAltPessoaAdmin($varUserId);
		
		if (!empty($result))	{	
			$row	= mysqli_fetch_assoc($result);
		
			return $row['id'];
		}		
	}

	/*função Altastrar Comprador*/
	public function controllersAltPessoa()	{
		/*Chamar os Database Login*/
		$objDatabaseAltPessoa	= new database_altPessoa();
		/*Retorna o NOME digitado para altastro do comprador*/
		$postNome		=	controller_altPessoa::controllersAltPessoaPostNome();
		/*Retorna o EMAIL digitado para altastro do comprador*/
		$postEmail		=	controller_altPessoa::controllersAltPessoaPostEmail();
		/*Retorna o CELULAR digitado para altastro do comprador*/
		$postCelular	=	controller_altPessoa::controllersAltPessoaPostCelular();
		/*Retorna a opção do campo FUNCAO*/
		$postFuncao	=	controller_altPessoa::controllersAltPessoaPostFuncao();
		/*Retorna o campo ADMIN */
		$postAdmin	=	controller_altPessoa::controllersAltPessoaPostAdmin();
		/*Retorna a Senha*/
		$postSenha		=	controller_altPessoa::controllersAltPessoaPostSenha();
		/*Retorna a repeticao da senha*/
		$postRepSenha	=	controller_altPessoa::controllersAltPessoaPostRepSenha();
		/*Retorna a permissão de salvar o formulário*/
		$postSalvar		=	controller_altPessoa::controllersAltPessoaPostSalvar();
		/*Retorna o ID do Usuário método POST Retorna o Id do usuario no banco para confirmação*/
		$postRowUserId	=	controller_altPessoa::controllersAltPessoaPostRowUserId();
		/*Retorna a menssagem de sucesso*/
		$getSucesso		=	controller_altPessoa::controllersAltPessoaGetSucesso();	
		/*Retorna o ID do Usuário método POST*/
		$postUserId		=	controller_altPessoa::controllersAltPessoaPostUserId();
		/*Retorna o ID do Usuário método GET*/
		$getUserId		=	controller_altPessoa::controllersAltPessoaGetUserId();
		
		/*verifica de qual retorno vai buscar o ID para alteração*/
		$varUserId	= (!empty($getUserId))	?	$getUserId	:	$postUserId;
		
		/*retorna a mensagem de ERRO de alteração*/
		$erroAltastro	= controller_altPessoa::controllersAltPessoaError($postNome, $postEmail, $postSenha, $postRepSenha, $postSalvar, $varUserId, $postRowUserId, $postAdmin);
		
		
		print($erroAltastro);
		/*termino*/
		
		/*retorna a mensagem de CERTO de alteração*/
		$certoAltastro	= controller_altPessoa::controllersAltPessoaCerto($getSucesso, $erroAltastro);
		
		print($certoAltastro);
		/*termino*/

		if ((!empty($postNome) AND !empty($postEmail)) AND empty($erroAltastro))	{
			/*Insere o usuário no banco*/
			$objDatabaseAltPessoa->databaseAltPessoaInserir($postNome, $postEmail, $postCelular, $postSenha, $postAdmin, $postFuncao, $varUserId);			
			
			$redirect	= "?au=1&m=1&u=".base64_encode($varUserId);
			$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
			$HTML		.= "<script language='JavaScript'>";
			$HTML		.= "location.href='".$redirect."';";
			$HTML		.= "</script>";
			print($HTML);
		}
	}
}
?>