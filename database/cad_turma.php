<?php
/*
*Efetua a conexão com o banco
*/
require_once("conexao.php");

class database_cadTurma	{	
	/*Valida se o Curso se já está cadastrado*/
	public function databaseCadTurmaVerificaCurso($postNomeCursoSemAcento = null, $postNomeCurso = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT c.id
								FROM curso	c";
		$query	.=	" WHERE	c.nome	= '".addslashes(strtolower($postNomeCursoSemAcento))."'";
		$query	.=	" OR	c.nome	= '".addslashes(strtolower(htmlspecialchars($postNomeCurso)))."'";
		
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Lista curso para o select*/
	public function databaseCadTurmaListCurso()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id, nome
								FROM curso ";
							
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Lista Professor para o select*/
	public function databaseCadTurmaListProfessor()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT uf.id, u.nome
								FROM usuario u";
		$query	.=	" JOIN	usuario_funcao uf
								ON u.id = uf.usuarioid";
		$query	.=	" JOIN	funcao f
								ON uf.funcaoid = f.id";		
		$query	.=	" WHERE f.funcao	= 'professor'";
		$query	.=	" ORDER BY u.nome ASC";
							
		$result = mysqli_query($conect, $query);

		return $result;
	}

	/*Lista Sala para o select*/
	public function databaseCadTurmaListSala()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id, nome
								FROM sala ";
							
		$result = mysqli_query($conect, $query);

		return $result;
	}

	/*Insere o curso no banco*/
	public function databaseCadTurmaInserirCurso($postNomeCurso = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "INSERT INTO curso
						(nome, data)";
		$query	.=	" VALUES 
						('".addslashes(strtolower($postNomeCurso))."', NOW())";

		mysqli_query($conect, $query);
	}

	/*Insere o usuário no banco*/
	public function databaseCadTurmaInserir($cadTurmaCodTurma = null, $postNomeCursoSemAcento = null, $postNomeCurso = null, $arrProfessor = null, $arrSala = null, $postHoraInicio = null, $postHoraTermino = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();		

		$query	= "INSERT INTO turma
						(turma, usuario_funcaoid, cursoid, salaid, hora_inicio, hora_termino, data)";
		$query	.=	" VALUES 
						(".$cadTurmaCodTurma.", ".addslashes($arrProfessor).", (SELECT id FROM curso WHERE nome = '".addslashes(strtolower($postNomeCursoSemAcento))."' OR nome = '".addslashes(strtolower(htmlspecialchars($postNomeCurso)))."'), ".addslashes($arrSala).", '".addslashes($postHoraInicio)."', '".addslashes($postHoraTermino)."',  NOW())";
		
		mysqli_query($conect, $query);
	}
}
?>