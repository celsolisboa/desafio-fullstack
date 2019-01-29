<?php
/*
*Efetua a conexão com o banco
*/
require_once("conexao.php");

class database_painel	{
	/*Valida Username para verificar se já esta cadastrado como CPF*/
	public function databasePainelValidaUsuario($postUserName = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->conexao();

		$query	= "SELECT u.id, u.username, u.password, u.firstname nome, u.lastname sobrenome, u.email, u.phone1 telefone, u.phone2 celular,
					u.institution instituicao, u.department departamento, u.city cidade, u.country pais, u.address endereco  
								FROM 2017_user	u";
		$query	.=	" WHERE u.username = '".addslashes($postUserName)."'";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Valida se o usuário é admnistrador*/
	public function databasePainelAcessoAdmin($objUserId = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->conexao();

			$query	= null;

			$query	.= "SELECT	rs.value 
				FROM 2017_config	rs";
			$query	.=	" WHERE rs.name = 'siteadmins'";

			$mySql	= mysqli_query($conect, $query);

			$mySql = mysqli_fetch_array($mySql);

			$arr = explode(",",$mySql['value']);

			foreach($arr as &$value) {
				if ($objUserId == $value)	{
					return true;
				}
			}
	}
	/*termino*/
}
?>