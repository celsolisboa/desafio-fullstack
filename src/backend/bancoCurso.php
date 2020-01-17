<?php

function listaCurso($conexao){
    $cursos = array();

    $retorna = mysqli_query($conexao, "select * from banco");
    while($curso = mysqli_fetch_assoc($retorna)){
        array_push($cursos, $curso);
    }
    return $cursos;
}

function removeCurso($conexao, $id){
    $query = "delete from banco where id = {$id}";
    return mysqli_query($conexao, $query);
}