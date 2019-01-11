<?php

namespace App\Helper; 


class FuncoesHelper{	
	 
	
	public static function formatarSaidaJson($status, $msg, $dados, $erro){
	 	
	 	//$dados = mb_convert_encoding($dados, 'UTF-8', 'UTF-8');
	 	http_response_code($status);
		$retorno = json_encode( array("status" => $status, "msg" => $msg, "dados" => $dados, "erro" => $erro));
		if( json_last_error() > 0 ){
			throw new \Exception('Erro na formação do JSON');
		}
		 
		return $retorno;
	} 	
	
} 