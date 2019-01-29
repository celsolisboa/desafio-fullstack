<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/seguranca.php");

class controller_seguranca	{	
	/*Retorna quem o ID de quem está logado como administrador*/
	public function controllersSegurancaSessAdmin()		{		
		return (!empty($_SESSION["admin"]))	?	addslashes($_SESSION["admin"])	:	null;
	}
	/*Termino*/
	
	/*função para validar se usuário ainda é administrador*/
	function controllersSegurancaValidaAdmin()	{
		$objDatabaseSegurancaUsername		= new database_seguranca();
		/*Retorna quem o ID de quem está logado como administrador*/
		$sessAdminUserId	=	controller_seguranca::controllersSegurancaSessAdmin();	

		if (!empty($sessAdminUserId))	{	
			$result		= 	$objDatabaseSegurancaUsername->databaseSegurancaValidaAdmin($sessAdminUserId);
			
			if (!empty($result))	{
				$row		=	mysqli_fetch_assoc($result);
				
				$rowAdminId	= $row['id'];
	
				/*caso o usuário seja retirado de administrador o sistema o derruba automaticamente na próxima ação*/
				if (empty($rowAdminId))	{
					$_SESSION["admin"]	= null;
					$_SESSION["userid"]	= null;
				}
			}
		}
	}
}
?>