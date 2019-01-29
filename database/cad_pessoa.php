<?php
/*
*Efetua a conexão com o banco
*/
require_once("conexao.php");

class database_cadPessoa	{	
	/*Valida Username para verificar se já esta cadastrado com o Email*/
	public function databaseCadPessoaEmail($postEmail = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT u.id
								FROM usuario	u";
		$query	.=	" WHERE	u.email	= '".addslashes($postEmail)."'";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Insere a funçao do usuário no banco*/
	public function databaseCadPessoaInserirUsuarioFuncao($postEmail = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "INSERT INTO usuario_funcao
						(usuarioid, funcaoid, data)";

		$query	.=	" VALUES 
						((SELECT id FROM usuario WHERE email = '".$postEmail."'),	(SELECT id FROM funcao WHERE funcao = 'usuario'), NOW())";

		mysqli_query($conect, $query);
	}
	
	
	
	/*Insere o usuário no banco*/
	public function databaseCadPessoaInserir($postNome = null, $postEmail = null, $postCelular = null, $postSenha = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "INSERT INTO usuario
						(nome, email, celular, senha, data)";

		$query	.=	" VALUES 
						('".addslashes(strtolower($postNome))."', '".addslashes(strtolower($postEmail))."', '".addslashes($postCelular)."', '".addslashes(sha1($postSenha))."',  NOW())";
		
		mysqli_query($conect, $query);
	}
}
?>