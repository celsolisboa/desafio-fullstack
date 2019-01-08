<?php
namespace App\Service;

use \App\Entity\Usuario; 

class UsuarioService{

    private $usuario; 

    public function __construct( Usuario $usuario ){
        $this->usuario = $usuario; 
    }
    
    private static function gerarToken(Usuario $usuario) : string{
    	$id = $usuario->id;
    	$data = date("YmdHis");
    	
    	if( $id == null ){
			throw new \Exception('Usuário inválido');
		}
		 
		return md5($id.$data);
	}
	
	public function verificarToken() : bool{
		
		$email = $this->usuario->getEmail();
		$token = $this->usuario->getToken();
		
		$verificado = Usuario::where(array('email' => $email, 'token'=> $token))->count(); 
		
		$retorno = false;
		if( $verificado > 0 ){
			$retorno = true;
		}else{
			throw new \Exception("Requisição não autorizada! Token Inválido!");
		}
		
		return $retorno;
		
	}

    public function logar() : string{ 
         
        $email = $this->usuario->getEmail();
        $senha = md5( $this->usuario->getSenha() );        
         
        $usuario = Usuario::where(array('email' => $email, 'senha'=> $senha))->first();
        
        
        
        $retorno = "";
        if(  $usuario  ){ 
        	$token = self::gerarToken($usuario);       	
        	 
        	
        	//gravar token na tabela
        	$usuario->setToken($token);
        	$usuario->save(); 
			$retorno = $usuario->getToken();
		}else{			
			throw new \Exception("Os dados de email e/ou senha são inválidos!");
		}     
         
        return $retorno;
    }
}