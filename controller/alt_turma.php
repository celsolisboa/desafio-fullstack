<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/alt_turma.php");

class controller_altTurma	{
	/*Retorna o NOME CURSO*/
	public function controllersAltTurmaPostNomeCurso()	{		
		return (!empty($_POST['nome_curso']))		?	addslashes(htmlentities($_POST['nome_curso']))		:	null;
	}

	/*Retorna o PROFESSOR*/
	public function controllersAltTurmaPostProfessor()		{		
		return (!empty($_POST['professor']))	?	$_POST['professor']	:	null;
	}
	/*Termino*/

	/*Retorna o SALA*/
	public function controllersAltTurmaPostSala()		{		
		return (!empty($_POST['sala']))	?	$_POST['sala']	:	null;
	}
	/*Termino*/

	/*Retorna a Hora INICIO*/
	public function controllersAltTurmaPostHoraInicio()		{		
		return (!empty($_POST['hora_inicio']))		?	addslashes($_POST['hora_inicio'])	:	null;
	}
	/*Termino*/

	/*Retorna a Hora Termino*/
	public function controllersAltTurmaPostHoraTermino()		{		
		return (!empty($_POST['hora_termino']))	?	addslashes($_POST['hora_termino'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a permissão de salvar o formulário*/
	public function controllersAltTurmaPostSalvar()		{		
		return (!empty($_POST['salvar']))	?	addslashes($_POST['salvar'])	:	null;
	}
	/*Termino*/
	
	/*Retorna id da turma*/
	public function controllersAltTurmaTurmaId()		{		
		return (!empty($_GET['t']))	?	addslashes(base64_decode($_GET['t']))	:	base64_decode($_POST['t']);
	}
	/*Termino*/
	
	/*Retorna a menssagem de sucesso*/
	public function controllersAltTurmaGetSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/
	
	/*retorna a mensagem de ERRO de cadastro*/
	private function controllersAltTurmaError($postNomeCurso	= null, $postProfessor = null, $postSala	= null, $postHoraInicio = null,  $postHoraTermino = null,  $postSalvar = null)	{		
		/*Chamar os Database Login*/
		$objDatabaseAltTurma	= new database_altTurma();
		
		if (empty($postNomeCurso)	AND	!empty($postSalvar))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> nome do curso <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (empty($postProfessor)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> professor <strong> é de preenchimento obrigatório!</div><p></p>";
		}		
		
		if (empty($postSala)	AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> sala <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (empty($postHoraInicio) AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> Hora de Inicio <strong> é de preenchimento obrigatório!</div><p></p>";
		}
		
		if (empty($postHoraTermino) AND	!empty($postSalvar) AND empty($erroCadastro))			{
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> Hora de Termino <strong> é de preenchimento obrigatório!</div><p></p>";
		}

		/*tratamento de notice*/
		$erroCadastro	= !empty($erroCadastro)? $erroCadastro : null;

		return $erroCadastro;
	}
	/*termino*/
	
	/*retorna a mensagem de CERTO de cadastro*/
	private function controllersAltTurmaCerto ($postSucesso	= null, $erroCadastro = null)	{		
		/*Chamar os Database Login*/
		$objDatabaseAltTurma	= new database_altTurma();

		if (!empty($postSucesso) AND empty($erroCadastro))	{
			$certoCadastro	= "<div class='alert alert-success' role='alert'>Turma cadastrada com sucesso!</div><p></p>";
		
			return $certoCadastro;
		}
	}
	/*termino*/
	
	/*função Listar dados da turma para alteração*/
	public function controllersAltTurmaDadosTurma()	{		
		/*Chamar os Database*/
		$objDatabaseAltTurma	= new database_altTurma();
		
		/*Retorna id da turma*/
		$varTurma	= controller_altTurma::controllersAltTurmaTurmaId();

		$result	= $objDatabaseAltTurma->databaseAltTurmaDadosTurma($varTurma);
		
		/*retira o Warning da tela*/
		$result	= !empty($result)	?	$result	:	null;
		
		return $result;
	}
	/*termino*/
	
	/*Valida se o Curso se já está cadastrado*/
	private function controllersAltTurmaVerificaCurso($postNomeCursoSemAcento	= null)	{		
		/*Chamar os Database*/
		$objDatabaseAltTurma	= new database_altTurma();

		$result	= $objDatabaseAltTurma->databaseAltTurmaVerificaCurso($postNomeCursoSemAcento);

		/*Retira o notice da tela*/
		if (!empty($result))	{
			$row	= mysqli_fetch_assoc($result);

			return $row['id'];
		}
	}
	/*termino*/

	/*Lista Professor para o select*/
	public function controllersAltTurmaListCurso()	{		
		/*Chamar a classe do database*/
		$objDatabaseAltTurma	= new database_altTurma();		

		return $objDatabaseAltTurma->databaseAltTurmaListCurso();
	}
	/*termino*/
	
	/*Lista Professor para o select*/
	public function controllersAltTurmaListProfessor()	{		
		/*Chamar a classe do database*/
		$objDatabaseAltTurma	= new database_altTurma();		

		return $objDatabaseAltTurma->databaseAltTurmaListProfessor();
	}
	/*termino*/
	
	/*função para Listar as Salas*/
	function controllersAltTurmaListSalaTurma($rowSalaId = null, $rowTurma = null)	{
		$objDatabaseAltTurma	= new database_altTurma();

		$result		= 	$objDatabaseAltTurma->databaseAltTurmaListSalaTurma($rowSalaId, $rowTurma);		

		return $result;
	}
	
	/*Lista Sala para o select*/
	public function controllersAltTurmaListSala($rowTurma = null)	{		
		/*Chamar a classe do database*/
		$objDatabaseAltTurma	= new database_altTurma();		

		return $objDatabaseAltTurma->databaseAltTurmaListSala($rowTurma);
	}
	/*termino*/
	
	/*Insere o curso no banco*/
	private function controllersAltTurmaInserirCurso($postNomeCurso	= null)	{		
		/*Chamar a classe do database*/
		$objDatabaseAltTurma	= new database_altTurma();		

		$objDatabaseAltTurma->databaseAltTurmaInserirCurso($postNomeCurso);
	}
	/*termino*/
	
	/*Deleta os dados do usuário para inserir novamente*/
	private function controllersAltTurmaDeleteTurma($varTurma	= null)	{		
		/*Chamar a classe do database*/
		$objDatabaseAltTurma	= new database_altTurma();		

		$objDatabaseAltTurma->databaseAltTurmaDeleteTurma($varTurma);
	}
	/*termino*/
	
	
	/*função Cadastrar Comprador*/
	public function controllersAltTurma()	{
		/*Chamar os Database Login*/
		$objDatabaseAltTurma	= new database_altTurma();
		/*Retorna o NOME CURSO*/
		$postNomeCurso		=	controller_altTurma::controllersAltTurmaPostNomeCurso();
		/*Retorna o PROFESSOR*/
		$postProfessor		=	controller_altTurma::controllersAltTurmaPostProfessor();
		/*Retorna o SALA*/
		$postSala			=	controller_altTurma::controllersAltTurmaPostSala();
		/*Retorna a Hora INICIO*/
		$postHoraInicio		=	controller_altTurma::controllersAltTurmaPostHoraInicio();
		/*Retorna a Hora TERMINO*/
		$postHoraTermino	=	controller_altTurma::controllersAltTurmaPostHoraTermino();
		/*Retorna a permissão de salvar o formulário*/
		$postSalvar			=	controller_altTurma::controllersAltTurmaPostSalvar();
		/*Retorna id da turma*/
		$varTurma			= controller_altTurma::controllersAltTurmaTurmaId();
		/*Retorna a menssagem de sucesso*/
		$getSucesso			=	controller_altTurma::controllersAltTurmaGetSucesso();
		
		/*retira o acendo para consulta no banco*/
		function controllersAltTurmaTirarAcentos($postNomeCurso	= null){
			return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$postNomeCurso);
		}

		/*retorna a mensagem de ERRO de cadastro*/
		$erroCadastro	= controller_altTurma::controllersAltTurmaError($postNomeCurso, $postProfessor, $postSala, $postHoraInicio, $postHoraTermino, $postSalvar);

		print($erroCadastro);
		/*termino*/

		/*retorna a mensagem de CERTO de cadastro*/
		$certoCadastro	= controller_altTurma::controllersAltTurmaCerto($getSucesso, $erroCadastro);
		
		print($certoCadastro);
		/*termino*/

		if ((!empty($postNomeCurso) AND !empty($postProfessor) AND !empty($postSala) AND !empty($postHoraInicio) AND !empty($postHoraTermino)) AND empty($erroCadastro))	{
			/*retira o acendo para consulta no banco*/
			$postNomeCursoSemAcento = controllersAltTurmaTirarAcentos($postNomeCurso);
			
			/*Valida se o Curso já está cadastrado*/
			$rowCursoId	=	controller_altTurma::controllersAltTurmaVerificaCurso($postNomeCursoSemAcento, $postNomeCurso);

			if (empty($rowCursoId))	{
				controller_altTurma::controllersAltTurmaInserirCurso($postNomeCurso);
			}
			
			/*Deleta os dados do usuário para inserir novamente*/
			controller_altTurma::controllersAltTurmaDeleteTurma($varTurma);
			
			/*resgata informação do campo professor*/
			foreach($postProfessor as $arrProfessor)	{
				/*resgata informação do campo professor*/
				foreach($postSala as $arrSala)	{
					/*Insere o usuário no banco novamente depois da exclusão*/
					$objDatabaseAltTurma->databaseAltTurmaInserir($varTurma, $postNomeCursoSemAcento, $postNomeCurso, $arrProfessor, $arrSala, $postHoraInicio, $postHoraTermino);
				}
			}
			
			$redirect	= "?at=1&t=".base64_encode($varTurma)."&m=1";
			$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
			$HTML		.= "<script language='JavaScript'>";
			$HTML		.= "location.href='".$redirect."';";
			$HTML		.= "</script>";
			print($HTML);
		}
	}
}
?>