<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/login.php");

	class models_login	{
		/*Retorna o (USERNAME)*/
		public function modelsLoginPostUsername()	{
			$objControllerLogin		= new controller_login();
			
			return $objControllerLogin->controllersLoginPostUsername();
		}
		/*termino*/

		/*Retorna o SENHA*/
		public function modelsLoginPostSenha()		{
			$objControllerLogin		= new controller_login();

			return $objControllerLogin->controllersLoginPostSenha();
		}
		/*termino*/

		/*retorna a mensagem de ERRO de cadastro*/
		public function modelsLoginValidaError()	{
			$objControllerLogin		= new controller_login();

			$objControllerLogin->controllersLoginValidaError();
			/*termino*/
		}
		/*termino*/
		
		/*função para validar usuário e senha*/
		public function modelsLoginValidaUsuario()	{
			$objControllerLogin		= new controller_login();

			return $objControllerLogin->controllersLoginValidaUsuario();
		}
		/*termino*/
	}
?>