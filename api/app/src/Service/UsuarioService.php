<?php
namespace App\Service;

use \App\Entity\Usuario;
use Doctrine\ORM\EntityManager;

class UsuarioService{

    private $usuario;
    private $em;

    public function __construct( Usuario $usuario, EntityManager $em ){
        $this->usuario = $usuario;
        $this->em = $em;
    }
    
    private static function gerarToken(Usuario $usuario) : string{
    	$id = $usuario->getId();
    	$data = date("YmdHis");
    	
    	if( $id == null ){
			throw new \Exception('Usuário inválido');
		}
		 
		return md5($id.$data);
	}
	
	public function verificarToken() : bool{
		
		$email = $this->usuario->getEmail();
		$token = $this->usuario->getToken();
		
		$verificado = $this->em->getRepository('\App\Entity\Usuario')->findOneBy(array('email' => $email, 'token'=> $token)); 
		
		$retorno = false;
		if( $verificado ){
			$retorno = true;
		}else{
			throw new \Exception("Requisição não autorizada! Token Inválido!");
		}
		
		return $retorno;
		
	}

    public function logar() : string{ 
         
        $email = $this->usuario->getEmail();
        $senha = md5( $this->usuario->getSenha() );        
         
        $usuario = $this->em->getRepository('\App\Entity\Usuario')->findOneBy(array('email' => $email, 'senha'=> $senha)); 
        
        $retorno = "";
        if( $usuario ){
        	$token = self::gerarToken($usuario);
        	
        	//gravar token na tabela
        	$this->usuario->setToken($token);
        	$this->em->persist($this->usuario);
			$this->em->flush(); 
			$retorno = $this->usuario->getToken();
		}else{			
			throw new \Exception("Os dados de email e/ou senha são inválidos!");
		}     
         
        return $retorno;
    }
}