<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../objetos/curso.php';
 
$database = new Database();
$db = $database->getConnection();
 
$curso = new Curso($db);
 
// get posted data

$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->curso) &&
    !empty($data->idprofessor) &&
    !empty($data->idsala) &&
    !empty($data->inicio) &&
    !empty($data->fim)
){
 
    // set curso property values
    $curso->curso = $data->curso;
    $curso->idprofessor = $data->idprofessor;
    $curso->idsala = $data->idsala;
    $curso->inicio = $data->inicio;
    $curso->fim = $data->fim;
 
    // create the curso
    if($curso->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "Curso de ".$curso->curso." criado com sucesso."));
    }
 
    // if unable to create the product, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Problemas para criar o Curso."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Problemas para criar o Curso. Dados incompletos."));
    
}
?>