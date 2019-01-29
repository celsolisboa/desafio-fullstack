<?php
	/*
	*Efetua a montagem das telas do sistema
	*/
	require_once("controller/cad_pessoa.php");

	class model_cadPessoa	{
		/*Retorna o NOME*/
		public function modelsCadPessoaPostNome()	{
			$objControllerCadPessoa	= new controller_cadPessoa();
			
			return $objControllerCadPessoa->controllersCadPessoaPostNome();
		}

		/*Retorna o EMAIL*/
		public function modelsCadPessoaPostEmail()	{
			$objControllerCadPessoa		= new controller_cadPessoa();

			return $objControllerCadPessoa->controllersCadPessoaPostEmail();
		}
		
		/*Retorna o CELULAR*/
		public function modelsCadPessoaPostCelular()	{
			$objControllerCadPessoa		= new controller_cadPessoa();

			return $objControllerCadPessoa->controllersCadPessoaPostCelular();
		}

		/*Retorna a Senha*/
		public function modelsCadPessoaPostSenha()		{
			$objControllerCadPessoa		= new controller_cadPessoa();

			return $objControllerCadPessoa->controllersCadPessoaPostSenha();
		}

		/*Retorna a repeticao da senha*/
		public function modelsCadPessoaPostRepSenha()	{
			$objControllerCadPessoa		= new controller_cadPessoa();

			return $objControllerCadPessoa->controllersCadPessoaPostRepSenha();
		}

		/*função Cadastrar Comprador*/
		public function modelsCadPessoa()		{
			/*Retorna o NOME digitado para cadastro do comprador*/
			$postNome		= model_cadPessoa::modelsCadPessoaPostNome();
			/*Retorna o EMAIL digitado para cadastro do comprador*/
			$postEmail		= model_cadPessoa::modelsCadPessoaPostEmail();			
			/*Retorna o CELULAR digitado para cadastro do comprador*/
			$postCelular	= model_cadPessoa::modelsCadPessoaPostCelular();			
			/*Retorna a Senha*/
			$postSenha		= model_cadPessoa::modelsCadPessoaPostSenha();			
			/*Retorna a repeticao da senha*/
			$postRepSenha	= model_cadPessoa::modelsCadPessoaPostRepSenha();

			$objControllerCadPessoa		= new controller_cadPessoa();

			$objControllerCadPessoa->controllersCadPessoa();
		}
	}
?>