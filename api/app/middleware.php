<?php 

use App\Entity\Usuario;
use App\Service\UsuarioService;
use App\Helper\FuncoesHelper;
use Doctrine\ORM\EntityManager;

class AutenticacaoTokenMiddleware
{
    /**
     * Example middleware invokable class
     *
     * @param  \Psr\Http\Message\ServerRequestInterface $request  PSR7 request
     * @param  \Psr\Http\Message\ResponseInterface      $response PSR7 response
     * @param  callable                                 $next     Next middleware
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    private $em; 

    public function __construct(EntityManager $em)
    { 
        $this->em = $em;
    }
	
    public function __invoke($request, $response, $next)
    { 
        try{
			$tokenHeader = $request->getHeader('token_auth');
	    	$emailHeader = $request->getHeader('email_auth');
	    	    	
	    	$usuario = new Usuario();
	    	$usuario->setEmail($emailHeader);
	    	$usuario->setToken($tokenHeader);    	
	    	
	    	$uS = new UsuarioService( $usuario, $this->em );
	    	$verificado = $uS->verificarToken();
	    	
	    	$status = $response->getStatusCode();
				
		}catch( \Exception $e ){ 
			$msg = $e->getMessage();
			die( FuncoesHelper::formatarSaidaJson(401,"Requisição não autorizada! Token Inválido!",[],1));
		}
		
		return $next($request, $response); 
    }
}