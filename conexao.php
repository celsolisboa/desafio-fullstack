<?php
class conexao	{
	/*Servidor de Produção*/
	private static $dbtypeProd		= "mysql";
    private static $hostProd		= " ";
    private static $portProd		= "3306";
    private static $userProd		= " ";
    private static $passwordProd	= " ";
	/*Termino*/
	
	/*Banco de Desenvolvimento*/
	private static $dbtypeLocal		= "mysql";
	private static $hostLocal		= "localhost";
	private static $portLocal		= "3306";
	private static $userLocal		= "root";
	private static $passwordLocal	= "vertrigo";
	/*termino*/
	
	/*Banco de Homologação*/
	private static $dbtypeHomolog	= "mysql";
	private static $hostHomolog		= "localhost";
	private static $portHomolog		= "3306";
	private static $userHomolog		= "root";
	private static $passwordHomolog	= "vertrigo";
	/*termino*/

	/*Retorna o nome do banco de Produção*/
	private static $dbProd		= "desafio-fullstack-master";
	/*Homologação*/
	
	/*Retorna o nome do banco de Desenvolvimento*/
	private static $dbLocalHost	= "desafio-fullstack-master";
	/*Homologação*/
	
	/*Retorna o nome do banco de Homologação*/
	private static $dbHomolog	= "desafio-fullstack-master";
	/*Homologação*/

	/*Efetua a conexão com o Banco de Dados de Produção*/
    private function getHostProd()		{
        return self::$hostProd;
    }

    private function getPortProd()		{
        return self::$portProd;
    }

    private function getUserProd()		{
        return self::$userProd;
    }

    private function getPasswordProd()	{
        return self::$passwordProd;
    }
	/*termino*/


	/*Efetua a conexão com o Desenvolvimento*/
    private function getHostLocal()		{
        return self::$hostLocal;
    }

    private function getPortLocal()		{
        return self::$portLocal;
    }

    private function getUserLocal()		{
        return self::$userLocal;
    }

    private function getPasswordLocal()	{
        return self::$passwordLocal;
    }
	/*termino*/
	
	/*Efetua a conexão com o Homologação*/
	private function getHostHomolog()		{
        return self::$hostHomolog;
    }

    private function getPortHomolog()		{
        return self::$portHomolog;
    }

    private function getUserHomolog()		{
        return self::$userHomolog;
    }

    private function getPasswordHomolog()	{
        return self::$passwordHomolog;
    }
	/*termino*/
	
	/*Chama o Banco de Dados de Produção*/
	private function getDBProd()		{
        return self::$dbProd;
	}
	
	/*Chama o banco de Desenvolvimento*/
	private function getDBLocalHost()		{
        return self::$dbLocalHost;
	}
	
	/*Chama o banco de Homologação*/
	private function getDBHomolog()		{
        return self::$dbHomolog;
	}
	
	/* Função que faz a conexão com o banco de dados */
    public function bd() {		
		/*DATA Modifica a zona de tempo a ser utilizada. Disnovível desde o PHP 5.1*/
		date_default_timezone_set('UTC');
		
		/*Efetua a conexão com o Banco de Dados de Produção*/
		if ($_SERVER['HTTP_HOST'] == " ")	{
			$conect = mysqli_connect($this->getHostProd(), $this->getUserProd(), $this->getPasswordProd(),$this->getDBProd());
				
			return $conect;
		/*Efetua a conexão com o Banco de Dados Desenvolvimento*/
		} else if($_SERVER['HTTP_HOST'] == "" OR $_SERVER['HTTP_HOST'] == "127.0.0.1")	{			
			$conect = mysqli_connect($this->getHostLocal(), $this->getUserLocal(), $this->getPasswordLocal(),$this->getDBLocalHost());
				
			return $conect;
		/*Efetua a conexão com o Banco para Homologacao*/
		}	else	{
			$conect = mysqli_connect($this->getHostHomolog(), $this->getUserHomolog(), $this->getPasswordHomolog(),$this->getDBHomolog());
				
			return $conect;
		/*Efetua a conexão com o Banco de Dados Desenvolvimento*/
		}	
		
		/*exibe a mensagem de erro em caso de não conectar*/
		if (empty($conect))	{
			print("É necessário verificar a conexão com o banco");
			
			die;
		}
		
		/*Aqui está o segredo do erro de caracter quando houver*/
		#mysql_query("SET NAMES 'utf8'");
		#mysql_query('SET character_set_connection=utf8');
		#mysql_query('SET character_set_client=utf8');
		#mysql_query('SET character_set_results=utf8');
	}
}
?>
