<?php
class Curso{
 
    // database connection and table name
    private $conn;
    //private $table_name = "cursos";
 
    // object properties
    public $idcurso;
    public $curso;
    public $idprofessor;
    public $professor;
    public $idsala;
    public $sala;
    public $inicio;
    public $fim;
    public $usuario;
    public $senha;
    //public $created;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    
    public function login(){
    
        // query to read single record
        $query ="SELECT 
                    usuario, senha
                FROM 
                    usuarios 
                WHERE 
                    usuario = ? AND 
                    senha = ?";

        // prepare query statement
        $stmt = $this->conn->prepare( $query );

        // bind id of login to be updated
        $stmt->bindParam(1, $this->usuario);
        $stmt->bindParam(2, $this->senha);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->usuario = $row['usuario'];
       
    }

    // read cursos
    function read(){
 
            // select all query
            $query =    "SELECT 
                            c.idcurso, c.curso,c.idprofessor, p.professor,c.idsala, s.sala, c.inicio, c.fim 
                        FROM 
                            cursos c, professores p, salas s 
                        WHERE 
                            c.idprofessor = p.idprofessor and 
                            c.idsala = s.idsala 
                        ORDER BY 
                            c.idcurso";
        
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
    }

    // create curso
    public function create(){
    
        // query to insert record
        $query = "INSERT INTO
                    cursos (curso, idprofessor, idsala, inicio, fim)
                VALUES (:curso, :idprofessor, :idsala, :inicio, :fim)";

    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->curso=htmlspecialchars(strip_tags($this->curso));
        $this->idprofessor=htmlspecialchars(strip_tags($this->idprofessor));
        $this->idsala=htmlspecialchars(strip_tags($this->idsala));
        $this->inicio=htmlspecialchars(strip_tags($this->inicio));
        $this->fim=htmlspecialchars(strip_tags($this->fim));
    
        // bind values
        $stmt->bindParam(":curso", $this->curso);
        $stmt->bindParam(":idprofessor", $this->idprofessor);
        $stmt->bindParam(":idsala", $this->idsala);
        $stmt->bindParam(":inicio", $this->inicio);
        $stmt->bindParam(":fim", $this->fim);
    
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
                    c.idcurso, c.curso, c.idprofessor, p.professor, c.idsala, s.sala, c.inicio, c.fim 
                FROM 
                    cursos c, professores p, salas s 
                WHERE 
                    c.idprofessor = p.idprofessor AND 
                    c.idsala = s.idsala AND
                    c.idcurso = ?
                LIMIT
                    0,1";            
    
        // prepare query statement
        $stmt = $this->conn->prepare( $query );
    
        // bind id of product to be updated
        $stmt->bindParam(1, $this->idcurso);
    
        // execute query
        $stmt->execute();
    
        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // set values to object properties
        $this->curso = $row['curso'];
        $this->idprofessor = $row['idprofessor'];
        $this->professor = $row['professor'];
        $this->idsala = $row['idsala'];
        $this->sala = $row['sala'];
        $this->inicio = $row['inicio'];
        $this->fim = $row['fim'];
    }

    // update the curso
    public function update(){
    
        // update query
        $query = "UPDATE
                    cursos
                SET
                    curso = :curso,
                    idprofessor = :idprofessor,
                    idsala = :idsala,
                    inicio = :inicio,
                    fim = :fim
                WHERE
                    idcurso = :idcurso";
    
        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->curso=htmlspecialchars(strip_tags($this->curso));
        $this->idprofessor=htmlspecialchars(strip_tags($this->idprofessor));
        $this->idsala=htmlspecialchars(strip_tags($this->idsala));
        $this->inicio=htmlspecialchars(strip_tags($this->inicio));
        $this->fim=htmlspecialchars(strip_tags($this->fim));
        $this->idcurso=htmlspecialchars(strip_tags($this->idcurso));
    
        // bind new values
        $stmt->bindParam(':curso', $this->curso);
        $stmt->bindParam(':idprofessor', $this->idprofessor);
        $stmt->bindParam(':idsala', $this->idsala);
        $stmt->bindParam(':inicio', $this->inicio);
        $stmt->bindParam(':fim', $this->fim);
        $stmt->bindParam(':idcurso', $this->idcurso);
    
        // execute the query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }

    // delete the curso
    public function delete(){
    
        // delete query
        $query = "DELETE FROM cursos WHERE idcurso = ?";
    
        // prepare query
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $this->idcurso=htmlspecialchars(strip_tags($this->idcurso));
    
        // bind id of record to delete
        $stmt->bindParam(1, $this->idcurso);
    
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
                            c.idcurso, c.curso, p.professor, s.sala, c.inicio, c.fim 
                        FROM 
                            cursos c
                        INNER JOIN 
                            professores p ON c.idprofessor = p.idprofessor
                        INNER JOIN 
                            salas s ON c.idsala = s.idsala
                        WHERE 
                            c.curso LIKE ? OR p.professor LIKE ? OR s.sala LIKE ?
                        ORDER BY 
                            c.curso DESC";

        // prepare query statement
        $stmt = $this->conn->prepare($query);
    
        // sanitize
        $keywords=htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";
    
        // bind
        $stmt->bindParam(1, $keywords);
        $stmt->bindParam(2, $keywords);
        $stmt->bindParam(3, $keywords);
    
        // execute query
        $stmt->execute();
    
        return $stmt;
    }

    // read products with pagination
    public function readPaging($from_record_num, $records_per_page){
    
        // select query
        $query =    "SELECT 
                        c.idcurso, c.curso, p.professor, s.sala, c.inicio, c.fim 
                    FROM 
                        cursos c, professores p, salas s 
                    WHERE 
                        c.idprofessor = p.idprofessor and 
                        c.idsala = s.idsala 
                    ORDER BY 
                        c.idcurso DESC
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

    // used for paging products
    public function total(){
        $query = "SELECT COUNT(*) as total FROM cursos";
    
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
        return $row['total'];
    }
}