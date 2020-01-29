<?php 

$host = "localhost";
$user = "root";
$password = "";
$banco = "desafiofullstack";

$conexao = mysqli_connect("$host", "$user", "$password", "$banco"); //faz a conexao com o banco de dados
mysqli_set_charset($conexao, "utf8"); //aceita registro com acentuação

#if(!$conexao){
#    die('Deu error' . mysqli_error());
#}else{
#    echo "Conexão estabelecida";
#}

