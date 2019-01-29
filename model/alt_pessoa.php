<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/alt_pessoa.php");

	class model_altPessoa	{
		/*Retorna o NOME digitado para cadastro do comprador*/
		public function modelsAltPessoaPostNome()	{
			$objControllerAltPessoa	= new controller_altPessoa();
			
			return $objControllerAltPessoa->controllersAltPessoaPostNome();
		}

		/*Retorna o EMAIL digitado para cadastro do comprador*/
		public function modelsAltPessoaPostEmail()	{
			$objControllerAltPessoa		= new controller_altPessoa();

			return $objControllerAltPessoa->controllersAltPessoaPostEmail();
		}
		
		/*Retorna o CELULAR digitado para cadastro do comprador*/
		public function modelsAltPessoaPostCelular()	{
			$objControllerAltPessoa		= new controller_altPessoa();

			return $objControllerAltPessoa->controllersAltPessoaPostCelular();
		}

		/*Retorna a Senha*/
		public function modelsAltPessoaPostSenha()		{
			$objControllerAltPessoa		= new controller_altPessoa();

			return $objControllerAltPessoa->controllersAltPessoaPostSenha();
		}

		/*Retorna a repeticao da senha*/
		public function modelsAltPessoaPostRepSenha()	{
			$objControllerAltPessoa		= new controller_altPessoa();

			return $objControllerAltPessoa->controllersAltPessoaPostRepSenha();
		}
		
		/*Retorna dados do usuário para alteração*/
		public function modelsAltPessoaListaDados()	{
			$objControllerAltPessoa		= new controller_altPessoa();

			return $objControllerAltPessoa->controllersAltPessoaListaDados();
		}
		
		/*Lista todas as funções cadastradas*/
		public function modelsAltPessoaListaFuncao($rowFuncaoId	= null)	{
			$objControllerAltPessoa		= new controller_altPessoa();

			$result	=	$objControllerAltPessoa->controllersAltPessoaListaFuncao($rowFuncaoId);

			$HTML	= null;
			while($row = mysqli_fetch_assoc($result))	{
				$HTML	.=	'<option value="'.$row['funcaoid'].'">'.$row['funcao'].'</option>';		
			}

			print($HTML);
		}
		
		/*Retorna a informação se já é ADMIN*/
		public function modelsAltPessoaAdmin($varAltFuncao = null)	{
			$objControllerAltPessoa		= new controller_altPessoa();

			$rowAdminSenha	= $objControllerAltPessoa->controllersAltPessoaAdmin();

			$HTML	= null;

			if (empty($rowAdminSenha))	{
				$HTML	.= '<div class="col-md-8">';
					$HTML	.= '<div id="avisoForm1" class="admin"></div>';
				$HTML	.= '</div>';
			} else if (!empty($rowAdminSenha) AND $varAltFuncao != "usuário" )	{
				$HTML	.= '<div class="col-md-8">';
					$HTML	.= '<div id="avisoForm1" class="admin" >
									<label class="col-md-3 control-label" for="admin">
										Admin
										<input id="admin" name="admin" type="checkbox"  value="1" checked>
									</label>
								</div>';
				$HTML	.= '</div>';
			}

			return $HTML;
		}

		/*função Altastrar Comprador*/
		public function modelsAltPessoa()		{
			/*Retorna o NOME digitado para altastro do comprador*/
			$postNome		= model_altPessoa::modelsAltPessoaPostNome();
			/*Retorna o EMAIL digitado para altastro do comprador*/
			$postEmail		= model_altPessoa::modelsAltPessoaPostEmail();			
			/*Retorna o CELULAR digitado para altastro do comprador*/
			$postCelular	= model_altPessoa::modelsAltPessoaPostCelular();			
			/*Retorna a Senha*/
			$postSenha		= model_altPessoa::modelsAltPessoaPostSenha();			
			/*Retorna a repeticao da senha*/
			$postRepSenha	= model_altPessoa::modelsAltPessoaPostRepSenha();

			$objControllerAltPessoa		= new controller_altPessoa();

			$objControllerAltPessoa->controllersAltPessoa();
		}
	}
?>