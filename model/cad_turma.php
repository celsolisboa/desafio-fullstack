<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/cad_turma.php");

	class model_cadTurma	{
		/*Retorna o NOME do CURSO*/
		public function modelsCadTurmaPostNomeCurso()	{
			$objControllerCadTurma	= new controller_cadTurma();
			
			return $objControllerCadTurma->controllersCadTurmaPostNomeCurso();
		}

		/*Retorna o PROFESSOR*/
		public function modelsCadTurmaPostProfessor()	{
			$objControllerCadTurma		= new controller_cadTurma();

			return $objControllerCadTurma->controllersCadTurmaPostProfessor();
		}
		
		/*Retorna a sala*/
		public function modelsCadTurmaPostSala()	{
			$objControllerCadTurma		= new controller_cadTurma();

			return $objControllerCadTurma->controllersCadTurmaPostSala();
		}

		/*Retorna data de inicio*/
		public function modelsCadTurmaPostDataInicio()		{
			$objControllerCadTurma		= new controller_cadTurma();

			return $objControllerCadTurma->controllersCadTurmaPostDataInicio();
		}

		/*Retorna a data de termino*/
		public function modelsCadTurmaPostDataTermino()	{
			$objControllerCadTurma		= new controller_cadTurma();

			return $objControllerCadTurma->controllersCadTurmaPostDataTermino();
		}
		
		/*Lista Curso no select*/
		public function modelsCadTurmaListCurso()	{
			$objControllerCatTurma	= new controller_cadTurma();

			$result	=	$objControllerCatTurma->controllersCadTurmaListCurso();			

			/*retira o notice*/
			if (!empty($result))	{
				$HTML	= null;				
				while($row = mysqli_fetch_assoc($result))	{
					$HTML	.=	'<option>'.ucfirst($row['nome']).'</option>';		
				}

				print($HTML);
			}
		}
		/*termino*/
		
		/*Lista Professor no select*/
		public function modelsCadTurmaListProfessor()	{	
			$objControllerCatTurma	= new controller_cadTurma();

			$result	=	$objControllerCatTurma->controllersCadTurmaListProfessor();
			
			/*retira o notice em caso de estar vazio*/
			if (!empty($result))	{
				$HTML	= null;				
				while($row = mysqli_fetch_assoc($result))	{
					$HTML	.=	'<option value="'.$row['id'].'">'.$row['nome'].'</option>';		
				}

				print($HTML);
			}
		}
		/*termino*/
		
		/*Lista sala no select*/
		public function modelsCadTurmaListSala()	{	
			$objControllerCatTurma	= new controller_cadTurma();

			$result	=	$objControllerCatTurma->controllersCadTurmaListSala();
			
			/*retira o notice em caso de estar vazio*/
			if (!empty($result))	{
				$HTML	= null;				
				while($row = mysqli_fetch_assoc($result))	{
					$HTML	.=	'<option value="'.$row['id'].'">'.$row['nome'].'</option>';		
				}

				print($HTML);
			}
		}
		/*termino*/

		/*função Cadastrar Turma*/
		public function modelsCadTurma()		{
			$objControllerCadTurma		= new controller_cadTurma();

			$objControllerCadTurma->controllersCadTurma();
		}
	}
?>