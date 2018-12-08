<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// include database and object file
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare curso object
$curso = new Curso($db);
 
// get curso id
//$data = json_decode(file_get_contents("php://input"));

// set curso id to be deleted
$curso->idcurso = isset($_GET['idcurso']) ? $_GET['idcurso'] : die();
//$curso->idcurso = $data->idcurso;
 
// delete the curso
if($curso->delete()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "O Curso foi deletado."));
}
 
// if unable to delete the curso
else{
 
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Problemas para deletar o Curso."));
}
?>