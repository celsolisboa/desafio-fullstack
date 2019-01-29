<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/alt_turma.php");

	class model_altTurma	{
		/*Retorna o NOME do CURSO*/
		public function modelsAltTurmaPostNomeCurso()	{
			$objControllerAltTurma	= new controller_altTurma();
			
			return $objControllerAltTurma->controllersAltTurmaPostNomeCurso();
		}

		/*Retorna o PROFESSOR*/
		public function modelsAltTurmaPostProfessor()	{
			$objControllerAltTurma		= new controller_altTurma();

			return $objControllerAltTurma->controllersAltTurmaPostProfessor();
		}
		
		/*Retorna a sala*/
		public function modelsAltTurmaPostSala()	{
			$objControllerAltTurma		= new controller_altTurma();

			return $objControllerAltTurma->controllersAltTurmaPostSala();
		}

		/*Retorna data de inicio*/
		public function modelsAltTurmaPostHoraInicio()		{
			$objControllerAltTurma		= new controller_altTurma();

			return $objControllerAltTurma->controllersAltTurmaPostHoraInicio();
		}

		/*Retorna a data de termino*/
		public function modelsAltTurmaPostHoraTermino()	{
			$objControllerAltTurma		= new controller_altTurma();

			return $objControllerAltTurma->controllersAltTurmaPostHoraTermino();
		}
		
		/*função Listar dados da turma para alteração*/
		public function modelsAltTurmaDadosTurma()	{
			$objControllerAltTurma		= new controller_altTurma();

			return $objControllerAltTurma->controllersAltTurmaDadosTurma();
		}
		
		/*Lista Curso no select*/
		public function modelsAltTurmaListCurso()	{
			$objControllerCatTurma	= new controller_altTurma();

			$result	=	$objControllerCatTurma->controllersAltTurmaListCurso();			

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
		public function modelsAltTurmaListProfessor($varProfessor = null)	{	
			$objControllerCatTurma	= new controller_altTurma();

			$result	=	$objControllerCatTurma->controllersAltTurmaListProfessor();
			
			/*retira o notice em caso de estar vazio*/
			if (!empty($result))	{
				$HTML	= null;				
				while($row = mysqli_fetch_assoc($result))	{
					if ($row['nome'] == $varProfessor)	{
						$HTML	.=	'<option value="'.$row['id'].'" selected>'.ucfirst($row['nome']).'</option>';
					} else {
						$HTML	.=	'<option value="'.$row['id'].'">'.$row['nome'].'</option>';
					}
				}

				print($HTML);
			}
		}
		/*termino*/
		
		/*função para Listar as Salas*/
		public function modelsAltTurmaListSalaTurma($rowSalaId = null, $rowTurma = null)	{
			$objControllerAltTurma		= new controller_altTurma();
				
			return $objControllerAltTurma->controllersAltTurmaListSalaTurma($rowSalaId, $rowTurma);
		}
		
		/*Lista sala no select*/
		public function modelsAltTurmaListSala($rowTurma = null)	{	
			$objControllerCatTurma	= new controller_altTurma();

			$result	=	$objControllerCatTurma->controllersAltTurmaListSala();
			
			
			
			/*retira o notice em caso de estar vazio*/
			if (!empty($result))	{
				$HTML	= null;				
				while($row = mysqli_fetch_assoc($result))	{					
					$resultSala = model_altTurma::modelsAltTurmaListSalaTurma($row['id'], $rowTurma);

					/*retira o Warning da tela*/
					if	(!empty($resultSala))	{
						$rowSala = mysqli_fetch_assoc($resultSala);
						
						if (!empty($rowSala['sala']))	{
							$HTML	.=	'AAA<option value="'.$rowSala['id'].'" selected>'.$rowSala['sala'].'</option>';
								
							$acesso = 1;
						}

					}

					if (empty($acesso)) {
						$HTML	.=	'BBB<option value="'.$row['id'].'">'.$row['nome'].'</option>';
					}
					
					$acesso = null;
				}
	
				print($HTML);
			}
		/*termino*/
		}

		/*função Cadastrar Turma*/
		public function modelsAltTurma()		{
			$objControllerAltTurma		= new controller_altTurma();

			$objControllerAltTurma->controllersAltTurma();
		}
	}
?>