<?php
class Sala{
 
    // database connection and table name
    private $conn;
    //private $table_name = "cursos";
 
    // object properties
    public $idsala;
    public $sala;
    //public $created;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read salaes
    function read(){
 
            // select all query
            $query =    "SELECT 
                            idsala, sala
                        FROM 
                            salas
                        ORDER BY 
                            idsala";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
    }

    // create sala
    public function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    salas
                SET
                    sala=:sala";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->sala=htmlspecialchars(strip_tags($this->sala));
        
        // bind values
        $stmt->bindParam(":sala", $this->sala);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
        
    }

    // used when filling up the update product form
    public function readOne(){
    
        // query to read single record
        $query ="SELECT 
                    idsala, sala
                FROM 
                    salas
                WHERE 
                   idsala = ?
                LIMIT
                    0,1";            
    
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind id of product to be updated
        $stmt->bindParam(1, $this->idsala);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->idsala = $row['idsala'];
        $this->sala = $row['sala'];
    }

    // update the sala
    public function update(){
    
        // update query
        $query = "UPDATE
                    salas
                SET
                    sala = :sala,
                WHERE
                    idsala = :idsala";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->sala=htmlspecialchars(strip_tags($this->sala));
        $this->idsala=htmlspecialchars(strip_tags($this->idsala));
        // bind new values
        $stmt->bindParam(':sala', $this->sala);
        $stmt->bindParam(':idsala', $this->idsala);
    
        // execute the query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }

    // delete the sala
    public function delete(){
    
        // delete query
        $query = "DELETE FROM salas WHERE idsala = ?";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->idsala=htmlspecialchars(strip_tags($this->idsala));
    
        // bind id of record to delete
        $stmt->bindParam(1, $this->idsala);
    
        // execute query
        if($stmt->execute()){
            return true;
        }
    
        return false;
        
    }

    // search products
    public function search($keywords){
    
        // select all query
        $query =    "SELECT 
                        idsala, sala
                    FROM 
                        salas
                    WHERE 
                        sala LIKE ?
                    ORDER BY 
                        sala DESC";

        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";
    
        // bind
        $stmt->bindParam(1, $keywords);
   
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // read salaes with pagination
    public function readPaging($from_record_num, $records_per_page){
    
        // select query
        $query =    "SELECT 
                        idsala, sala
                    FROM 
                        salas
                    ORDER BY 
                        sala DESC
                    LIMIT ?, ?";

        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind variable values
        $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
        $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);
    
        // execute query
        $stmt->execute();
    
        // return values from database
        return $stmt;
    }

    // used for paging salas
    public function total(){
        $query = "SELECT COUNT(*) as total FROM salas";
    
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $row['total'];
    }
}