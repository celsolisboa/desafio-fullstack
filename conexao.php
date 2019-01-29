<?php
class conexao	{
	/*Servidor de Produзгo*/
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
	
	/*Banco de Homologaзгo*/
	private static $dbtypeHomolog	= "mysql";
	private static $hostHomolog		= "localhost";
	private static $portHomolog		= "3306";
	private static $userHomolog		= "root";
	private static $passwordHomolog	= "vertrigo";
	/*termino*/

	/*Retorna o nome do banco de Produзгo*/
	private static $dbProd		= "desafio-fullstack-master";
	/*Homologaзгo*/
	
	/*Retorna o nome do banco de Desenvolvimento*/
	private static $dbLocalHost	= "desafio-fullstack-master";
	/*Homologaзгo*/
	
	/*Retorna o nome do banco de Homologaзгo*/
	private static $dbHomolog	= "desafio-fullstack-master";
	/*Homologaзгo*/

	/*Efetua a conexгo com o Banco de Dados de Produзгo*/
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


	/*Efetua a conexгo com o Desenvolvimento*/
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
	
	/*Efetua a conexгo com o Homologaзгo*/
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
	
	/*Chama o Banco de Dados de Produзгo*/
	private function getDBProd()		{
        return self::$dbProd;
	}
	
	/*Chama o banco de Desenvolvimento*/
	private function getDBLocalHost()		{
        return self::$dbLocalHost;
	}
	
	/*Chama o banco de Homologaзгo*/
	private function getDBHomolog()		{
        return self::$dbHomolog;
	}
	
	/* Funзгo que faz a conexгo com o banco de dados */
    public function bd() {		
		/*DATA Modifica a zona de tempo a ser utilizada. Disnovнvel desde o PHP 5.1*/
		date_default_timezone_set('UTC');
		
		/*Efetua a conexгo com o Banco de Dados de Produзгo*/
		if ($_SERVER['HTTP_HOST'] == " ")	{
			$conect = mysqli_connect($this->getHostProd(), $this->getUserProd(), $this->getPasswordProd(),$this->getDBProd());
				
			return $conect;
		/*Efetua a conexгo com o Banco de Dados Desenvolvimento*/
		} else if($_SERVER['HTTP_HOST'] == "" OR $_SERVER['HTTP_HOST'] == "127.0.0.1")	{			
			$conect = mysqli_connect($this->getHostLocal(), $this->getUserLocal(), $this->getPasswordLocal(),$this->getDBLocalHost());
				
			return $conect;
		/*Efetua a conexгo com o Banco para Homologacao*/
		}	else	{
			$conect = mysqli_connect($this->getHostHomolog(), $this->getUserHomolog(), $this->getPasswordHomolog(),$this->getDBHomolog());
				
			return $conect;
		/*Efetua a conexгo com o Banco de Dados Desenvolvimento*/
		}	
		
		/*exibe a mensagem de erro em caso de nгo conectar*/
		if (empty($conect))	{
			print("Й necessбrio verificar a conexгo com o banco");
			
			die;
		}
		
		/*Aqui estб o segredo do erro de caracter quando houver*/
		#mysql_query("SET NAMES 'utf8'");
		#mysql_query('SET character_set_connection=utf8');
		#mysql_query('SET character_set_client=utf8');
		#mysql_query('SET character_set_results=utf8');
	}
}
?>