<?php
/*
*Efetua a conex�o com o banco
*/
require_once("conexao.php");

class database_seguranca	{
	/*fun��o para validar se usu�rio ainda � administrador*/
	public function databaseSegurancaValidaAdmin($sessAdminUserId = null)	{
		/*Instancia a conexao*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= null;

		$query	.= "SELECT	id";
			$query	.= " FROM admin";
		$query	.=	" WHERE id	= ".$sessAdminUserId;

		$result = mysqli_query($conect, $query);

		return $result;
	}
	/*termino*/
}
?>