<?php
include '../../conexao/Conexao.php';

class Conteudo extends Conexao{
	private $curso;
    private $idprofessor;
    private $idsala;
    private $inicio;
    private $fim;


    function getCurso() {
        return $this->curso;
    }

    function getDescricao() {
        return $this->idprofessor;
    }

    function getidsala() {
        return $this->idsala;
    }

    function getinicio() {
        return $this->inicio;
    }

    function getfim() {
        return $this->fim;
    }

    function setCurso($curso) {
        $this->curso = $curso;
    }

    function setDescricao($idprofessor) {
        $this->idprofessor = $idprofessor;
    }

    function setidsala($idsala) {
        $this->idsala = $idsala;
    }

    function setinicio($inicio) {
        $this->inicio = $inicio;
    }

    function setfim($fim) {
        $this->fim = $fim;
    }


    public function insert($obj){
    	$sql = "INSERT INTO cursos(curso,fk_idprofessor,fk_idsala,inicio,fim) VALUES (:curso,:idprofessor,:idsala,:inicio,:fim)";
    	$consulta = Conexao::prepare($sql);
        $consulta->bindValue('curso',  $obj->curso);
        $consulta->bindValue('idprofessor', $obj->idprofessor);
        $consulta->bindValue('idsala' , $obj->idsala);
        $consulta->bindValue('inicio' , $obj->inicio);
        $consulta->bindValue('fim' , $obj->fim);
       
    	return $consulta->execute();

	}

	public function update($id = null, $obj){
		$sql = "UPDATE cursos SET curso = :curso, fk_idprofessor = :idprofessor, fk_idsala = :idsala, inicio = :inicio, fim =:fim WHERE idcurso = :id ";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('curso', $obj->curso);
		$consulta->bindValue('idprofessor', $obj->idprofessor);
		$consulta->bindValue('idsala' , $obj->idsala);
		$consulta->bindValue('inicio', $obj->inicio);
		$consulta->bindValue('fim' , $obj->fim);
		$consulta->bindValue('id', $id);
		return $consulta->execute();
	}

	public function delete($id = null){
		$sql =  "DELETE FROM cursos WHERE idcurso = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id',$id);
		$consulta->execute();
	}

	public function findProfessores(){
        $sql = "SELECT * FROM professores";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
    }
    
    public function findSalas(){
        $sql = "SELECT * FROM salas";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}
    
    public function editCurso($id = null){
		$sql =  "SELECT c.idcurso, c.curso, p.idprofessor, s.idsala, c.inicio, c.fim FROM cursos c, professores p, salas s WHERE idcurso = :id and c.fk_idprofessor = p.idprofessor and c.fk_idsala = s.idsala
        ";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id',$id);
        $consulta->execute();
        return $consulta->fetchAll();
	}
    
	public function findAll(){
		$sql = "SELECT c.idcurso, c.curso, p.professor, s.sala, c.inicio, c.fim FROM cursos c, professores p, salas s WHERE c.fk_idprofessor = p.idprofessor and c.fk_idsala = s.idsala ORDER BY c.idcurso";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
    }
    
    public function login($email, $senha){
        $sql = "SELECT * FROM usuarios WHERE usuario = :email AND senha = :senha";
        $consulta = Conexao::prepare($sql);
        $consulta->bindValue('email',$email);
        $consulta->bindValue('senha',$senha);
        $consulta->execute();
        $reg = $consulta->fetchAll(0);
        return $reg;
            
    }

}

?>