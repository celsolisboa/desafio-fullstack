<?php

session_start();
include('conexao.php');


$nomeCurso = $_POST['nomeCurso'];
$professor = $_POST['professor'];
$sala = $_POST['sala'];
$horarioInicio = $_POST['horarioInicio'];
$horarioFim = $_POST['horarioFim'];
#echo $nomeCurso, $professor, $sala, $horarioInicio, $horarioFim;
#echo 'Por enquanto ta tudo tranquilo...';

$sql = "INSERT into adicionaCurso (nomeCurso, professor, sala, horarioInicio, horarioFim) VALUES ('$nomeCurso', '$professor', '$sala', '$horarioInicio', '$horarioFim')";

/*
if (!$sql) {
    die('Deu xabu mane...' . mysqli_error());
}else{
    echo("Dados inseridos.");
}
*

mysqli_query($conexao, $sql);

if (mysqli_insert_id($conexao)) {
    header("Location: ../participe.php");
} else {
    header("Location: ../participe.php");
}
