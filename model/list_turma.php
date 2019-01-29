<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("controller/list_turma.php");

class model_listTurma	{
	/*função para Listar as Salas*/
	public function modelsListTurmaListSalas($rowTurma = null)	{
		$objControllerListTurma		= new controller_listTurma();
			
		return $objControllerListTurma->controllersListTurmaListSala($rowTurma);
	}
	
	/*função Listar turma*/
	public function modelListTurma()		{
		$objControllerListTurma		= new controller_listTurma();

		$result 	= $objControllerListTurma->controllerListTurma();

		/*Retira a mensagem de worniing da tela*/
		if (!empty($result))	{
			$HTML	= null;
			while($row = mysqli_fetch_assoc($result))	{
				$rowTurmaId	= $row["id"];				
				$rowTurma	= $row["turma"];				

				$HTML	.=  "<tr>";
					#$HTML	.= "<td>";
					#$HTML	.= $rowTurmaId;
					#$HTML	.= "</td>";
					$HTML	.= "<td>";
					$HTML	.= ucfirst($row["professor"]);
					$HTML	.= "</td>";
					$HTML	.= "<td>";
					$HTML	.= ucfirst($row["curso"]);
					$HTML	.= "</td>";
					$HTML	.= "<td>";
					
					/*função para Listar as Salas*/
						$resultSala = model_listTurma::modelsListTurmaListSalas($rowTurma);
						$i = 0;
						while($rowSala = mysqli_fetch_assoc($resultSala))	{
							if ($i > 0)	{
								$HTML	.= " , ";
							}
								
							$HTML	.= $rowSala["sala"];
							$i++;
						}

					$HTML	.= "</td>";
					$HTML	.= "<td>";
					$HTML	.= $row["hora_inicio"];
					$HTML	.= "</td>";
					$HTML	.= "<td>";
					$HTML	.= $row["hora_termino"];
					$HTML	.= "</td>";
	
					$HTML	.= "<td>";
					$HTML	.= '<div class="btn-group">
										<a href="?at=1&t='.base64_encode($rowTurma).'">
											<button type="button" class="btn btn-default" title="Alteração de dados do usuário">
												<span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
											</button>
										</a>
									</div>';
					$HTML	.= "</td>";
					$HTML	.= "</tr>";

								
			}

			print $HTML;	
		}
			
			
	}
}
?>