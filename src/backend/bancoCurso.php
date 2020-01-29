<?php

include 'conexao.php';

$consulta = "select * from cursos";

$retornaCurso = mysqli_query($conexao, $consulta); //consulta os dados no banco e retorna

//