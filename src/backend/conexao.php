<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "desafioFullstack";
$conexao = mysqli_connect("$host", "$user", "$password", "$database"); //FAZ A CONEXAO COM O BANCO DE DADOS MYSQL
mysqli_set_charset($conexao, "utf8"); // ACEITA REGISTRO COM ACENTO, SE TIVER

if (!$conexao) {
    die('error' . mysqli_error());
}
echo "Conexao estabelecida";
mysqli_close($conexao);
