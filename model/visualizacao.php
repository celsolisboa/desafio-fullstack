<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("controller/visualizacao.php");

class models_visualizacao	{		
	/*função para Listar as Salas*/
	public function modelsVisualizacaoListSalas($rowTurma = null)	{
		$objControllerVisualizacao		= new controller_visualizacao();
			
		return $objControllerVisualizacao->controllersVisualizacaoListSala($rowTurma);
	}
		
	/*função para visualização*/
	public function modelsVisualizacao()	{
		$objControllerVisualizacao		= new controller_visualizacao();
			
		/*Valida a posição do curso na tela esquerda direita*/
		function visualizacaoPosicao($rowTurmaId = null)	{
			$varLeftRight	= $rowTurmaId%2;
			
			if ($varLeftRight == 0)	{
					$varPosicao = "left";
			} else 	{
					$varPosicao = "right";
			} 
			
			return $varPosicao;
		}
		
		$result = $objControllerVisualizacao->controllersVisualizacao();
		
		$HTML	= null;
		/*Retira a mensagem de worniing da tela*/
		if (!empty($result))	{
			
			$HTML	.= '<section id="left" class="left">';
			while($row = mysqli_fetch_assoc($result))	{
				$rowTurmaId	= $row["id"];
				$rowTurma	= $row["turma"];

				if (visualizacaoPosicao($rowTurmaId) == "left")	{
					$HTML	.= '<table style="border: 1px solid #000;">';
						$HTML	.= '<tr>';
							$HTML	.= '<td class="titulo-curso"><strong>'.ucfirst($row["curso"]).'</td>';
							$HTML	.= '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
							$HTML	.= '<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>';
						$HTML	.= '</tr>';
						$HTML	.= '<tr>';
							$HTML	.= '<td><br><br><br></td>';
							$HTML	.= '<td><br><br><br></td>';
							$HTML	.= '<td><br><br><br></td>';
						$HTML	.= '</tr>';
						$HTML	.= '<tr>';
						$HTML	.= '<td>Prof:'.ucfirst($row["professor"]).'<br>';
						$HTML	.= 'Sala:';
						
						/*função para Listar as Salas*/
						$resultSala = models_visualizacao::modelsVisualizacaoListSalas($rowTurma);
							$i = 0;
							while($rowSala = mysqli_fetch_assoc($resultSala))	{
								if ($i > 0)	{
									$HTML	.= " e ";
								}
								
								$HTML	.= $rowSala["sala"];
								$i++;
							}
							$HTML.= '</td>';
							$HTML	.= '<td></td>';
							$HTML	.= '<td>'.$row["hora_inicio"].' ás'.$row["hora_termino"].'</td>';
						$HTML	.= '</tr>';
					$HTML	.= '</table>';
					$HTML	.= '</br>';
				}			
			}
			$HTML	.= '</section>';	
		}

		$result = $objControllerVisualizacao->controllersVisualizacao();

		/*Retira a mensagem de worniing da tela*/
		if (!empty($result))	{			
			$HTML	.= '<section id="right" class="right">';
			while($row = mysqli_fetch_assoc($result))	{
				$rowTurmaId	= $row["id"];
				$rowTurma	= $row["turma"];

				if (visualizacaoPosicao($rowTurmaId) == "right")	{					
					$HTML	.= '<table style="border: 1px solid #000;">';
						$HTML	.= '<tr>';
							$HTML	.= '<td class="titulo-curso"><strong>'.ucfirst($row["curso"]).'</td>';
							$HTML	.= '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>';
							$HTML	.= '<td style="text-align:right;"><span class="glyphicon glyphicon-trash" ></span></td>';
						$HTML	.= '</tr>';
						$HTML	.= '<tr>';
							$HTML	.= '<td><br><br><br></td>';
							$HTML	.= '<td><br><br><br></td>';
							$HTML	.= '<td><br><br><br></td>';
						$HTML	.= '</tr>';
						$HTML	.= '<tr>';
							$HTML	.= '<td>Prof:'.ucfirst($row["professor"]).'<br>'.$row["sala"].'</td>';
							$HTML	.= '<td></td>';
							$HTML	.= '<td>'.$row["hora_inicio"].' ás'.$row["hora_termino"].'</td>';
						$HTML	.= '</tr>';
					$HTML	.= '</table>';
					$HTML	.= '</br>';
				}
							
			}
			$HTML	.= '</section>';
			
		}

		print $HTML;	
	}
	/*termino*/
}
?>