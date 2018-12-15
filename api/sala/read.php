<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// database connection will be here
// include database and object files
include_once '../config/database.php';
include_once '../objetos/sala.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$sala = new Sala($db);
 
// read products will be here
// query products
$stmt = $sala->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // salas array
    $salas_arr=array();
    $salas_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $sala_item=array(
            "idsala" => $idsala,
            "sala" => html_entity_decode($sala),
        );
 
        array_push($salas_arr["records"], $sala_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show salas data in json format
    echo json_encode($salas_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "Nenhum sala encontrado.")
    );
}