<?php
session_start();

include 'conexao.php';

$email = mysqli_real_escape_string($conexao, $_POST['email']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "SELECT * FROM login WHERE email = '$email' and senha = '{$senha}'";

$retornaLogin = mysqli_query($conexao, $query);

$row = mysqli_num_rows($retornaLogin);

if($row == 1){

    $_SESSION['email'] = $email;
    header("Location: ../../cursos.php");
    exit();

}else{

    #header("Location: ../../index.php");
    #exit();

}