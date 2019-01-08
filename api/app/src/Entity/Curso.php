<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
/**
 * Curso
 *
 * @ORM\Table(name="curso", indexes={@ORM\Index(name="disciplina_id", columns={"disciplina_id"})})
 * @ORM\Entity
 */
class Curso extends Model
{
    protected $table = "curso";
    
    private $id; 
    private $horarioInicio;     
    private $horarioFim;     
    private $disciplina;
    private $professores;
    
         
    public function getId()
    {
        return $this->id;
    }

     
    public function setHorarioInicio($horarioInicio)
    {
        $this->horarioInicio = $horarioInicio;

        return $this;
    }

    
    public function getHorarioInicio()
    {
        return $this->horarioInicio;
    }

    
    public function setHorarioFim($horarioFim)
    {
        $this->horarioFim = $horarioFim;

        return $this;
    }

     
    public function getHorarioFim()
    {
        return $this->horarioFim;
    }

     
    public function setDisciplina(\App\Entity\Disciplina $disciplina = null)
    {
        $this->disciplina = $disciplina;

        return $this;
    }
 
    public function getDisciplina()
    {
        return $this->disciplina;
    }
    
    public function setProfessores($professores){
		$this->professores = $professores;
	}
	
	public function getProfessores()
    {
        return $this->professores;
    }
     
    public function professores()
    {
        return $this->belongsToMany('\App\Entity\Professor');
    }
    
    public function salas()
    {
        return $this->belongsToMany('\App\Entity\Sala');
    }
}
