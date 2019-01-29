<?php
/*
*Efetua a conexуo com o banco
*/
require_once("conexao.php");

class database_listPessoa	{	
	/*funчуo Listar pessoa*/
	public function databaseListPessoa()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT u.id, u.nome, u.email, u.celular, f.funcao
								FROM usuario	u";
		$query	.= " JOIN	usuario_funcao uf";
			$query	.= " ON	u.id = uf.usuarioid";
		$query	.= " JOIN	funcao f";
			$query	.= " ON	uf.funcaoid = f.id";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*verifica se щ administrador*/
	public function databaseListPessoaVerificaAdmin($rowUsuarioId	= null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id
								FROM admin";
		$query.= " WHERE	usuarioid = ".$rowUsuarioId;
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
}
?>