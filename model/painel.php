<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/painel.php");

	class model_painel	{
		/*Retorna o (USERNAME)*/
		public function modelsPainelPostUsername()	{
			$objControllerPainel	= new controller_painel();
			
			return $objControllerPainel->controllersPainelPostUsername();
		}

		/*Retorna o SENHA*/
		public function modelsPainelPostSenha()		{
			$objControllerPainel		= new controller_painel();

			return $objControllerPainel->controllersPainelPostSenha();
		}

		public function modelsPainelValidaUsuario()	{
			$varUsuario	= model_painel::modelsPainelPostUsername();

			$varSenha	= model_painel::modelsPainelPostSenha();

			$objControllerPainel		= new controller_painel();

			return $objControllerPainel->controllersPainelValidaUsuario();
		}
	}
?>