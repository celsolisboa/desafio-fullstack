 <meta http-equiv=Content-Type content="text/html; charset=UTF-8">
<?php

	//header("Content-Type: text/html; charset=ISO-8859-1",true);
 
	session_start();

	/*Retira o erro Strict standards da tela*/
	date_default_timezone_set('America/Sao_Paulo');

	/*Retira o erro Strict standards da tela*/
	error_reporting(E_ALL ^ E_STRICT);
	ini_set('error_reporting', E_ALL ^ E_STRICT);
	ini_set("display_errors", E_ALL ^ E_STRICT);
	error_reporting(0);

	/*Exibir configuração do servidor*/
	#phpinfo();

	/*Aparecendo ERRO*/
	ini_set('display_errors',1);
	ini_set('display_startup_erros',1);
	error_reporting(E_ALL);
	
	require_once("view/seguranca.php");
	
	/*Retira o notice da tela*/
	$sessUserId	= !empty($_SESSION["userid"])	?	$_SESSION["userid"]	: null;
	$sessAdmin	= !empty($_SESSION["admin"])	?	$_SESSION["admin"]	: null;
	

	if (!empty($sessUserId) AND !empty($sessAdmin))	{
		/*
		*Exibe a tela de painel de funcionalidades
		*/
		$_GET["pn"] = !empty($_GET["pn"]) ?$_GET["pn"] : null;
		if ($_GET["pn"] == 1)	{
			require_once("view/painel.php");
			
			
			die;
		}
		
		#######################################################
		#Inicia funcionalidade para adminnistração de usuários#
		#######################################################
	
		/*
		*Exibe a tela de lista de usuário de funcionalidades
		*/
		$_GET["au"] = !empty($_GET["au"]) ?$_GET["au"] : null;
		if ($_GET["au"] == 1)	{
			require_once("view/alt_pessoa.php");
        
			die;
		}
		
		/*
		*Exibe a tela de listar usuário
		*/
		$_GET["lu"] = !empty($_GET["lu"]) ?	$_GET["lu"] : null;
		if ($_GET["lu"] == 1)	{
			require_once("view/list_pessoa.php");

			die;
		}
		
		######################################################
		#Inicia funcionalidade para adminnistração das turmas#
		######################################################
		
		/*
		*Exibe a tela de painel de funcionalidades
		*/
		$_GET["ct"] = !empty($_GET["ct"]) ?$_GET["ct"] : null;
		if ($_GET["ct"] == 1)	{
			require_once("view/cad_turma.php");

			die;
		}
		
		/*
		*Exibe a tela listar turma
		*/
		$_GET["lt"] = !empty($_GET["lt"]) ?	$_GET["lt"] : null;
		if ($_GET["lt"] == 1)	{
			require_once("view/list_turma.php");

			die;
		}
		
		/*
		*Exibe a tela alterar turma
		*/
		$_GET["at"] = !empty($_GET["at"]) ?	$_GET["at"] : null;
		if ($_GET["at"] == 1)	{
			require_once("view/alt_turma.php");

			die;
		}
	}
	
	if (!empty($sessUserId))	{
		##################################################
		#               Acesso Usuário 					 #
		##################################################
	
		/*
		*Exibe a tela de lista de usuário de funcionalidades
		*/
		$_GET["v"] = !empty($_GET["v"]) ?$_GET["v"] : null;
		if ($_GET["v"] == 1)	{
			require_once("view/visualizacao.php");

			die;
		}		
	}
	
	###################################
	#    Acesso sem estar logado	  #
	###################################
	
	/*
	*Exibe a tela de cadastro de usuário de funcionalidades
	*/
	$_GET["cu"] = !empty($_GET["cu"]) ? $_GET["cu"] : null;
	if ($_GET["cu"] == 1)	{
		require_once("view/cad_pessoa.php");
			
		die;
	}	
		
	/*
	*Valida login do usuário ja esta registrado para acesso
	*/
	#!empty($_GET["lg"]) ? $_GET["lg"] = $_GET["lg"] : $_GET["lg"] = null;
	#if ($_GET["lg"] == 1)	{
		require_once("view/login.php");
	#}	
	
?>