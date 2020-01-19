<?php
session_start();

include 'conexao.php'; //conexao ao banco de dados
include 'bancoCurso.php'; //consultas no banco de dados


$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

$deleteCurso = "DELETE FROM cursos WHERE id={$id}";
$removeCurso = mysqli_query($conexao, $deleteCurso);


if (mysqli_affected_rows($conexao)){
    header("Location: cursos.php");
    exit;
    #echo "<script>location.href='cursos.php';</script>";
}else{
    header("Location: ");
}