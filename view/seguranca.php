<?php
/*
*Efetua a montagem das telas do sistema
*/
require_once("model/seguranca.php");

$objModelsSeguranca	=	new models_seguranca();

/*função para validar usuário e senha*/
$objModelsSeguranca->modelsSegurancaValidaAdmin();
?>