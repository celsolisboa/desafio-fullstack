<?php

include 'conexao.php';
include 'bancoCurso.php';

$id = $GET['id'];

removeCurso($conexao, $id);
die();
