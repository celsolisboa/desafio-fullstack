<?php

/*
*Efetua a conex�o com o banco
*/
require_once("conexao.php");

class database_login	{
	/*Valida senha e o usu�rio*/
	public function databaseLoginValidaUsuario($postUserName = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();
		
		$query	= null;

		$query	.= "SELECT	u.id, u.senha";
			$query	.= " FROM usuario u";
		$query	.=	" WHERE u.email		= '".$postUserName."'";

		$result = mysqli_query($conect, $query);

		return $result;
	}
	/*termino*/
	
	/*Valida se o usu�rio � admnistrador*/
	public function databaseLoginAcessoAdmin($rowUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= null;

		$query	.= "SELECT	id";
			$query	.= " FROM admin";
		$query	.=	" WHERE usuarioid		= '".$rowUserId."'";
		$result = mysqli_query($conect, $query);
    
		return $result;
	}
	/*termino*/
}
?>