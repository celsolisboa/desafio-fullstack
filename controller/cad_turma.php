<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("database/cad_turma.php");

class controller_cadTurma	{
	/*Retorna o NOME CURSO*/
	public function controllersCadTurmaPostNomeCurso()	{		
		return (!empty($_POST['nome_curso']))		?	addslashes(htmlentities($_POST['nome_curso']))		:	null;
	}

	/*Retorna o PROFESSOR*/
	public function controllersCadTurmaPostProfessor()		{		
		return (!empty($_POST['professor']))	?	$_POST['professor']	:	null;
	}
	/*Termino*/

	/*Retorna o SALA*/
	public function controllersCadTurmaPostSala()		{		
		return (!empty($_POST['sala']))	?	$_POST['sala']	:	null;
	}
	/*Termino*/

	/*Retorna a DATA INICIO*/
	public function controllersCadTurmaPostHoraInicio()		{		
		return (!empty($_POST['hora_inicio']))		?	addslashes($_POST['hora_inicio'])	:	null;
	}
	/*Termino*/

	/*Retorna a repeticao da senha*/
	public function controllersCadTurmaPostHoraTermino()		{		
		return (!empty($_POST['hora_termino']))	?	addslashes($_POST['hora_termino'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a permissão de salvar o formulário*/
	public function controllersCadTurmaPostSalvar()		{		
		return (!empty($_POST['salvar']))	?	addslashes($_POST['salvar'])	:	null;
	}
	/*Termino*/
	
	/*Retorna a menssagem de sucesso*/
	public function controllersCadTurmaGetSucesso()		{		
		return (!empty($_GET['m']))	?	addslashes($_GET['m'])	:	null;
	}
	/*Termino*/
	
	/*retorna a mensagem de ERRO de cadastro*/
	private function controllersCadTurmaError($postNomeCurso	= null, $postProfessor = null, $postSala	= null, $postHoraInicio = null,  $postHoraTermino = null,  $postSalvar = null)	{		
		/*Chamar os Database Login*/
		$objDatabaseCadTurma	= new database_cadTurma();
		
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
			$erroCadastro	= "<div class='alert alert-danger' role='alert'>O campo </strong> sala <strong> é de preenchimento obrigatório!</div><p></p>";
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
	private function controllersCadTurmaCerto ($postSucesso	= null, $erroCadastro = null)	{		
		/*Chamar os Database Login*/
		$objDatabaseCadTurma	= new database_cadTurma();

		if (!empty($postSucesso) AND empty($erroCadastro))	{
			$certoCadastro	= "<div class='alert alert-success' role='alert'>Turma cadastrada com sucesso!</div><p></p>";
		
			return $certoCadastro;
		}
	}
	/*termino*/
	
	/*Valida se o Curso se já está cadastrado*/
	private function controllersCadTurmaVerificaCurso($postNomeCursoSemAcento	= null)	{		
		/*Chamar os Database*/
		$objDatabaseCadTurma	= new database_cadTurma();

		$result	= $objDatabaseCadTurma->databaseCadTurmaVerificaCurso($postNomeCursoSemAcento);

		/*Retira o notice da tela*/
		if (!empty($result))	{
			$row	= mysqli_fetch_assoc($result);

			return $row['id'];
		}
	}
	/*termino*/

	/*Lista Professor para o select*/
	public function controllersCadTurmaListCurso()	{		
		/*Chamar a classe do database*/
		$objDatabaseCadTurma	= new database_cadTurma();		

		return $objDatabaseCadTurma->databaseCadTurmaListCurso();
	}
	/*termino*/
	
	/*Lista Professor para o select*/
	public function controllersCadTurmaListProfessor()	{		
		/*Chamar a classe do database*/
		$objDatabaseCadTurma	= new database_cadTurma();		

		return $objDatabaseCadTurma->databaseCadTurmaListProfessor();
	}
	/*termino*/
	
	/*Lista Sala para o select*/
	public function controllersCadTurmaListSala()	{		
		/*Chamar a classe do database*/
		$objDatabaseCadTurma	= new database_cadTurma();		

		return $objDatabaseCadTurma->databaseCadTurmaListSala();
	}
	/*termino*/
	
	/*Insere o curso no banco*/
	private function controllersCadTurmaInserirCurso($postNomeCurso	= null)	{		
		/*Chamar a classe do database*/
		$objDatabaseCadTurma	= new database_cadTurma();		

		$objDatabaseCadTurma->databaseCadTurmaInserirCurso($postNomeCurso);
	}
	/*termino*/
	
	/*retira o acendo para consulta no banco*/
	private function controllersCadTurmaTirarAcentos($postNomeCurso	= null){
		return preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$postNomeCurso);
	}

	/*função Cadastrar Comprador*/
	public function controllersCadTurma()	{
		/*Chamar os Database Login*/
		$objDatabaseCadTurma	= new database_cadTurma();
		/*Retorna o NOME CURSO*/
		$postNomeCurso		=	controller_cadTurma::controllersCadTurmaPostNomeCurso();
		/*Retorna o PROFESSOR*/
		$postProfessor		=	controller_cadTurma::controllersCadTurmaPostProfessor();
		/*Retorna o SALA*/
		$postSala			=	controller_cadTurma::controllersCadTurmaPostSala();
		/*Retorna a DATA INICIO*/
		$postHoraInicio		=	controller_cadTurma::controllersCadTurmaPostHoraInicio();
		/*Retorna a DATA TERMINO*/
		$postHoraTermino	=	controller_cadTurma::controllersCadTurmaPostHoraTermino();
		/*Retorna a permissão de salvar o formulário*/
		$postSalvar			=	controller_cadTurma::controllersCadTurmaPostSalvar();
		/*Retorna a menssagem de sucesso*/
		$getSucesso			=	controller_cadTurma::controllersCadTurmaGetSucesso();

		/*retorna a mensagem de ERRO de cadastro*/
		$erroCadastro	= controller_cadTurma::controllersCadTurmaError($postNomeCurso, $postProfessor, $postSala, $postHoraInicio, $postHoraTermino, $postSalvar);

		print($erroCadastro);
		/*termino*/

		/*retorna a mensagem de CERTO de cadastro*/
		$certoCadastro	= controller_cadTurma::controllersCadTurmaCerto($getSucesso, $erroCadastro);
		
		print($certoCadastro);
		/*termino*/
		
		function cadTurmaCodTurma($postNomeCurso = null)	{
			return $gera = rand(1,10000);			
		}

		if ((!empty($postNomeCurso) AND !empty($postProfessor) AND !empty($postSala) AND !empty($postHoraInicio) AND !empty($postHoraTermino)) AND empty($erroCadastro))	{
			/*retira o acendo para consulta no banco*/
			$postNomeCursoSemAcento = controller_cadTurma::controllersCadTurmaTirarAcentos($postNomeCurso);
			
			/*Valida se o Curso se já está cadastrado*/
			$rowCursoId	=	controller_cadTurma::controllersCadTurmaVerificaCurso($postNomeCursoSemAcento, $postNomeCurso);

			if (empty($rowCursoId))	{
				controller_cadTurma::controllersCadTurmaInserirCurso($postNomeCurso);
			}
			
			/*resgata informação do campo professor*/
			foreach($postProfessor as $arrProfessor)	{
				$cadTurmaCodTurma	= cadTurmaCodTurma();

				/*resgata informação do campo professor*/
				foreach($postSala as $arrSala)	{
					/*Insere o usuário no banco*/
					$objDatabaseCadTurma->databaseCadTurmaInserir($cadTurmaCodTurma, $postNomeCursoSemAcento, $postNomeCurso, $arrProfessor, $arrSala, $postHoraInicio, $postHoraTermino);
				}
			}
			
			$redirect	= "?ct=1&m=1";
			$HTML		= "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>";
			$HTML		.= "<script language='JavaScript'>";
			$HTML		.= "location.href='".$redirect."';";
			$HTML		.= "</script>";
			print($HTML);
		}
	}
}
?>