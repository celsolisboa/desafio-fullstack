<?php
/*
*Efetua a conexуo com o banco
*/
require_once("conexao.php");

class database_altTurma	{

	/*funчao Listar dados da turma para alteraчao*/
	public function databaseAltTurmaDadosTurma($varTurma = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT t.id, t.turma, t.hora_inicio, t.hora_termino, u.nome professor, c.nome curso, s.nome sala
								FROM turma	t";
		$query	.= " JOIN	usuario_funcao uf";
			$query	.= " ON	t.usuario_funcaoid = uf.id";
		$query	.= " JOIN	usuario u";
			$query	.= " ON	uf.usuarioid = u.id";
		$query	.= " JOIN	curso c";
			$query	.= " ON	t.cursoid = c.id";
		$query	.= " JOIN	sala s";
			$query	.= " ON	t.salaid = s.id";
		$query	.= " WHERE	t.turma =".$varTurma;
		
		$result = mysqli_query($conect, $query);

		return $result;
	}

	/*Valida se o Curso se jс estс cadastrado*/
	public function databaseAltTurmaVerificaCurso($postNomeCursoSemAcento = null, $postNomeCurso = null)	{
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
	public function databaseAltTurmaListCurso()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id, nome
								FROM curso ";
							
		$result = mysqli_query($conect, $query);

		return $result;
	}
	
	/*Lista Professor para o select*/
	public function databaseAltTurmaListProfessor()	{
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
	
	/*funчуo para Listar as Salas*/
	public function databaseAltTurmaListSalaTurma($rowSalaId = null, $rowTurma = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= null;

		$query	= "SELECT s.id, s.nome sala
								FROM turma	t";
		$query	.= " JOIN	sala s";
			$query	.= " ON	t.salaid = s.id";
		$query	.= " WHERE	t.turma =".$rowTurma;
		$query	.= " AND	t.salaid =".$rowSalaId;
		
		$result = mysqli_query($conect, $query);
    
		return $result;
	}
	/*termino*/

	/*Lista Sala para o select*/
	public function databaseAltTurmaListSala()	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "SELECT id, nome
								FROM sala ";
							
		$result = mysqli_query($conect, $query);

		return $result;
	}

	/*Insere o curso no banco*/
	public function databaseAltTurmaInserirCurso($varNomeCurso = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();

		$query	= "INSERT INTO curso
						(nome, data)";
		$query	.=	" VALUES 
						('".addslashes(strtolower($varNomeCurso))."', NOW())";

		mysqli_query($conect, $query);
	}

	/*Deleta os dados do usuсrio para inserir novamente*/
	public function databaseAltTurmaDeleteTurma($varTurma = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();
		
		$query	=	"DELETE FROM turma";		
		$query	.=	" WHERE  turma=".$varTurma;
		
		mysqli_query($conect, $query);
		/*termino*/
	}
	
	/*Insere o usuсrio no banco*/
	public function databaseAltTurmaInserir($varTurma = null, $postNomeCursoSemAcento = null, $postNomeCurso = null, $arrProfessor = null, $arrSala = null, $postHoraInicio = null, $postHoraTermino = null)	{
		/*Instancia o objeto de acesso ao banco*/
		$objDataBase	= new conexao();
		$conect			= $objDataBase->bd();
		
		$query	= "INSERT INTO turma
						(turma, usuario_funcaoid, cursoid, salaid, hora_inicio, hora_termino, data)";
		$query	.=	" VALUES 
						(".$varTurma.", ".addslashes($arrProfessor).", (SELECT id FROM curso WHERE nome = '".addslashes(strtolower($postNomeCursoSemAcento))."' OR nome = '".addslashes(strtolower(htmlspecialchars($postNomeCurso)))."'), ".addslashes($arrSala).", '".addslashes($postHoraInicio)."', '".addslashes($postHoraTermino)."',  NOW())";
		
		mysqli_query($conect, $query);
		/*termino*/
	}
}
?>