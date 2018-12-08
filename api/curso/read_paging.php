<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// utilities
$utilities = new Utilities();
 
// instantiate database and curso object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$curso = new Curso($db);
 
// query cursos
$stmt = $curso->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // cursos array
    $cursos_arr=array();
    $cursos_arr["records"]=array();
    $cursos_arr["paging"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['curso'] to
        // just $curso only
        extract($row);
 
        $curso_item=array(
            "idcurso" => $idcurso,
            "curso" => $curso,
            "professor" => $professor,
            "sala" => $sala,
            "inicio" => $inicio,
            "fim" => $fim
        );
 
        array_push($cursos_arr["records"], $curso_item);
    }
 
 
    // include paging
    
    $total_rows= '$curso->total()';
    $page_url="{$home_url}curso/read_paging.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $cursos_arr["paging"]=$paging;
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($cursos_arr);
}
 
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user cursos does not exist
    echo json_encode(
        array("message" => "Nenhum curso encontrado.")
    );
}
?>