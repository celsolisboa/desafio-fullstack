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
 
$data = json_decode(file_get_contents("php://input"));

// set ID property of record to read
$curso->usuario = $data->usuario;
$curso->senha = $data->senha;
 
// read the details of curso to be edited
$curso->login();
 
    if($curso->usuario!=null){
        // create array
        $curso_arr = array(
            "usuario" => $curso->usuario
        );
    
        // set response code - 200 OK
        http_response_code(200);
    
        // make it json format
        session_start();
        $_SESSION['usuario'] = $curso->usuario;
        $_SESSION['id'] = session_id();
        echo json_encode(array("message" => "Logado com sucesso."));
    }
    
    else{
        // set response code - 
        http_response_code(503);
    
        echo json_encode(array("message" => "Erro ao logar."));
    }
?>