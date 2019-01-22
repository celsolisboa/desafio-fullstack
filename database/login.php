<?php

/*
*Efetua a conexão com o banco
*/
require_once("conexao.php");

class database_login	{
	/*Valida senha e o usuário*/
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
	
	#/*Valida se o usuário é admnistrador*/
	#public function databaseLoginAcessoAdmin($postUserName = null)	{
	#	/*Instancia o objeto de acesso ao banco*/
	#	$objDataBase	= new conexao();
	#	$conect			= $objDataBase->conexaoBd();
	#	
	#	$query	= null;
    #
	#	$query	.= "SELECT	ad.id, ad.senha, ad.admin";
	#		$query	.= " FROM admin	ad";
	#		$query	.= " JOIN usuario u ON ad.admin	= u.id";
	#	$query	.=	" WHERE u.email		= '".$postUserName."'";
    #
	#	$query	.=	" OR u.cpf			= '".$postUserName."'";
    #
	#	$query	.=	" OR u.celular		= '".$postUserName."'";
    #
	#	$result = mysqli_query($conect, $query);
    #
	#	return $result;
	#}
	#/*termino*/
}
?>
