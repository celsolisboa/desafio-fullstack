<?php

include 'conexao.php';
include 'bancoCurso.php';


function removeCurso($conexao, $id){
    $query = "DELETE from cursos WHERE id = {$id}";
    return mysqli_query($conexao, $query);
    header("Location: cursos.php");
}

