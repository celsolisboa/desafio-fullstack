<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objetos/curso.php';
 
// instantiate database and curso object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$curso = new Curso($db);
 
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
 
// query cursos
$stmt = $curso->search($keywords);
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
        // this will make $row['curso'] to
        // just $curso only
        extract($row);
 
        $curso_item=array(
            "idcurso" => $idcurso,
            "curso" => html_entity_decode($curso),
            "professor" => $professor,
            "sala" => $sala,
            "inicio" => $inicio,
            "fim" => $fim
        );
 
        array_push($cursos_arr["records"], $curso_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show cursos data
    echo json_encode($cursos_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no cursos found
    echo json_encode(
        array("message" => "Nenhum registro encontrado.")
    );
}
?>
