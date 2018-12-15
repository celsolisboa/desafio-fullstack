<?php
class Professor{
 
    // database connection and table name
    private $conn;
    //private $table_name = "cursos";
 
    // object properties
    public $idprofessor;
    public $professor;
    //public $created;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read professores
    function read(){
 
            // select all query
            $query =    "SELECT 
                            idprofessor, professor
                        FROM 
                            professores
                        ORDER BY 
                            idprofessor";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
    }

    // create professor
    public function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    professores
                SET
                    professor=:professor";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->professor=htmlspecialchars(strip_tags($this->professor));
        
        // bind values
        $stmt->bindParam(":professor", $this->professor);
    
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
                    idprofessor, professor
                FROM 
                    professores
                WHERE 
                   idprofessor = ?
                LIMIT
                    0,1";            
    
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind id of product to be updated
        $stmt->bindParam(1, $this->idprofessor);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->idprofessor = $row['idprofessor'];
        $this->professor = $row['professor'];
    }

    // update the professor
    public function update(){
    
        // update query
        $query = "UPDATE
                    professores
                SET
                    professor = :professor,
                WHERE
                    idprofessor = :idprofessor";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->professor=htmlspecialchars(strip_tags($this->professor));
        $this->idprofessor=htmlspecialchars(strip_tags($this->idprofessor));
        // bind new values
        $stmt->bindParam(':professor', $this->professor);
        $stmt->bindParam(':idprofessor', $this->idprofessor);
    
        // execute the query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }

    // delete the professor
    public function delete(){
    
        // delete query
        $query = "DELETE FROM professores WHERE idprofessor = ?";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->idprofessor=htmlspecialchars(strip_tags($this->idprofessor));
    
        // bind id of record to delete
        $stmt->bindParam(1, $this->idprofessor);
    
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
                        idprofessor, professor
                    FROM 
                        professores
                    WHERE 
                        professor LIKE ?
                    ORDER BY 
                        professor DESC";

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

    // read professores with pagination
    public function readPaging($from_record_num, $records_per_page){
    
        // select query
        $query =    "SELECT 
                        idprofessor, professor
                    FROM 
                        professores
                    ORDER BY 
                        professor DESC
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

    // used for paging professores
    public function total(){
        $query = "SELECT COUNT(*) as total FROM professores";
    
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $row['total'];
    }
}