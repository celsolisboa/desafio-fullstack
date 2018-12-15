<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object files
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare curso object
$curso = new Curso($db);
 
// get id of curso to be edited
$data = json_decode(file_get_contents("php://input"));
 
// set ID property of curso to be edited
$curso->idcurso = $data->idcurso;
 
// set curso property values
$curso->curso = $data->curso;
$curso->idprofessor = $data->idprofessor;
$curso->idsala = $data->idsala;
$curso->inicio = $data->inicio;
$curso->fim = $data->fim;
 
// update the curso
if($curso->update()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "O Curso foi Atualizado."));
}
 
// if unable to update the curso, tell the user
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Problemas para atualizar o curso."));
}
?>
