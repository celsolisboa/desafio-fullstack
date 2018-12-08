<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare curso object
$curso = new Curso($db);
 
// set ID property of record to read
$curso->idcurso = isset($_GET['idcurso']) ? $_GET['idcurso'] : die();
 
// read the details of curso to be edited
$curso->readOne();
 
if($curso->curso!=null){
    // create array
    $curso_arr = array(
        "idcurso" => $curso->idcurso,
        "curso" => $curso->curso,
        "idprofessor" => $curso->idprofessor,
        "professor" => $curso->professor,
        "idsala" => $curso->idsala,
        "sala" => $curso->sala,
        "inicio" => $curso->inicio,
        "fim" => $curso->fim
 
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($curso_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the curso does not exist
    echo json_encode(array("message" => "Este Curso não existe."));
}
?>