<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("controller/list_pessoa.php");

class model_listPessoa	{	
	/*Retorna o POST cosnulta do usuário digitado*/
	public function modelListPessoaVerificaAdmin($rowUsuarioId	= null)	{
		$objControllerListPessoa	= new controller_listPessoa();
		
		return $objControllerListPessoa->controllerListPessoaVerificaAdmin($rowUsuarioId);
	}

	/*função Consultar pessoa*/
	public function modelListPessoa()		{
		$objControllerListPessoa		= new controller_listPessoa();

		$result 	= $objControllerListPessoa->controllerListPessoa();
		
		$HTML	= null;
		while($row = mysqli_fetch_assoc($result))	{
			
			$rowUsuarioId	= $row["id"];
			
			$HTML	.=  "<tr>";
				$HTML	.= "<td>";
				$HTML	.= $rowUsuarioId;
				$HTML	.= "</td>";
				$HTML	.= "<td>";
				$HTML	.= ucfirst($row["nome"]);
				$HTML	.= "</td>";
				$HTML	.= "<td>";
				$HTML	.= $row["email"];
				$HTML	.= "</td>";
				$HTML	.= "<td>";
				$HTML	.= $row["celular"];
				$HTML	.= "</td>";
				$HTML	.= "<td>";
				$HTML	.= ucfirst($row["funcao"]);
				$HTML	.= "</td>";
				
				$resultAdmin	= model_listPessoa::modelListPessoaVerificaAdmin($rowUsuarioId);
				
				$rowAdmin = mysqli_fetch_assoc($resultAdmin);
				
				$HTML	.= "<td>";
				if (!empty($rowAdmin['id']))	{
					$HTML	.= '<button type="button" class="btn btn-default" onclick="resetar_usuario('.$row["id"].')" title="Esse usuário está como Administrador do sistema!">
										<span class="glyphicon glyphicon-star" aria-hidden="true">Sim</span>
									</button>';
				} else {
					$HTML	.= '<button type="button" class="btn btn-default" onclick="resetar_usuario('.$row["id"].')" title="Uusário comum do sistema!">
										<span class="glyphicon glyphicon-star-empty" aria-hidden="true">Não</span>
									</button>';
				}
							
				$HTML	.= "</td>";
				$HTML	.= "<td>";
				$HTML	.= '<div class="btn-group">
									<a href="?au=1&u='.base64_encode($rowUsuarioId).'">
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
?>