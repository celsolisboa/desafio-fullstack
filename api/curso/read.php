<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// database connection will be here
// include database and object files
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$curso = new Curso($db);
 
// read products will be here
// query products
$stmt = $curso->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // cursos array
    $cursos_arr=array();
    $cursos_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $curso_item=array(
            "idcurso" => $idcurso,
            "curso" => html_entity_decode($curso),
            "idprofessor" => $idprofessor,
            "professor" => $professor,
            "idsala" => $idsala,
            "sala" => $sala,
            "inicio" => $inicio,
            "fim" => $fim
        );
 
        array_push($cursos_arr["records"], $curso_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show cursos data in json format
    echo json_encode($cursos_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "Nenhum Curso encontrado.")
    );
}