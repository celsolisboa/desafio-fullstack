<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/seguranca.php");

	class models_seguranca	{
		/*função para validar se usuário ainda é administrador*/
		public function modelsSegurancaValidaAdmin()	{			
			$objControllerSeguranca	= new controller_seguranca();

			return $objControllerSeguranca->controllersSegurancaValidaAdmin();
		}
		/*termino*/
	}
?>