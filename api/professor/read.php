<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// database connection will be here
// include database and object files
include_once '../config/database.php';
include_once '../objetos/professor.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$prof = new Professor($db);
 
// read professores will be here
// query professores
$stmt = $prof->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // profs array
    $profs_arr=array();
    $profs_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $prof_item=array(
            "idprofessor" => $idprofessor,
            "professor" => html_entity_decode($professor),
        );
 
        array_push($profs_arr["records"], $prof_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show profs data in json format
    echo json_encode($profs_arr);
}else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "Nenhum Professor encontrado.")
    );
}