<?php
include '../../control/ConteudoControl.php';

if(isset($_GET['id']) && $_GET['id'] <> ''){	
 $conteudoControl = new ConteudoControl();
 $conteudoControl->delete($_GET['id']);
 header('Location:index.php');
}







?>