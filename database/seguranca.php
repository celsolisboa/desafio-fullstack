<?php
/*
*Efetua a conexуo com o banco
*/
require_once("conexao.php");

class database_seguranca	{
	/*funчуo para validar se usuсrio ainda щ administrador*/
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