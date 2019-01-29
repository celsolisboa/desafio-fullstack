<?php
/*
*Efetua a conex�o com o banco
*/
require_once("conexao.php");

class database_altPessoa	{	
	/*Valida Username para verificar se j� esta cadastrado com o Email*/
	public function databaseAltPessoaEmail($postEmail = null, $varUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT u.id, u.nome
								FROM usuario	u";
		$query	.=	" WHERE	u.email	= '".addslashes($postEmail)."'";
		
		$query	.=	" AND	u.id	<> ".addslashes($varUserId);
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Retorna dados do usu�rio para altera�ao*/
	public function databaseAltPessoaListaDados($varUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT u.id userid, u.nome, u.email, u.celular, f.id funcaoid, f.funcao
								FROM usuario	u";
		$query	.= " JOIN	usuario_funcao uf";
			$query	.= " ON	u.id = uf.usuarioid";
		$query	.= " JOIN	funcao f";
			$query	.= " ON	uf.funcaoid = f.id";
		$query	.=	" WHERE	u.id	= ".addslashes($varUserId);
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Lista todas as fun�oes cadastradas*/
	public function databaseAltPessoaListaFuncao($rowFuncaoId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT f.id funcaoid, f.funcao
								FROM	funcao f";
		$query	.=	" WHERE	f.id	<> ".addslashes($rowFuncaoId);
		$query	.=	" ORDER BY	f.funcao	DESC";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Retorna a informa��o se j� � ADMIN*/
	public function databaseAltPessoaAdmin($varUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id
								FROM admin	a";
		$query	.=	" WHERE	a.usuarioid	= '".$varUserId."'";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Insere o usu�rio no banco*/
	public function databaseAltPessoaInserir($postNome = null, $postEmail = null, $postCelular = null, $postSenha = null, $postAdmin = null, $postFuncao = null, $varUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		/*Altera os dados do usu�rios*/
		$query	=	"UPDATE usuario";
		$query	.=	" SET";
		$query	.=	" nome='".addslashes($postNome)."', email='".addslashes($postEmail)."', celular='".addslashes($postCelular)."'";

		/*entra quando for alterar senha*/
		if (!empty($postSenha))	{		
			$query	.= ", senha='".addslashes(sha1($postSenha))."'";
		}

		$query	.=	" WHERE  id=".$varUserId;

		mysqli_query($conect, $query);
		/*termino*/
		
		/*Altera o perfil do usu�rio*/
		$query	=	"UPDATE usuario_funcao";
		$query	.=	" SET";
		$query	.=	" funcaoid=".addslashes($postFuncao);
		
		$query	.=	" WHERE  usuarioid=".$varUserId;
		
		mysqli_query($conect, $query);
		/*termino*/
		
		if (!empty($postAdmin))	{
			/*Incluir o usu�rio como Administrador*/
			$query	= "INSERT INTO admin
							(usuarioid, data)";
				$query	.=	" VALUES 
							(".addslashes($varUserId).", NOW())";

				mysqli_query($conect, $query);
		} else {
			/*retira o usu�rio como administrador*/
			$query	=	"DELETE FROM admin";
				$query	.=	" WHERE usuarioid=".$varUserId;
				
			mysqli_query($conect, $query);
		}
	}
}
?>