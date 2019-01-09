<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;

 
class CursoSala extends Model
{
     
    protected $table = "curso_sala";    
    private $id;     
    private $curso;     
    private $sala;
    public $timestamps = false;
 
    public function getId()
    {
        return $this->id;
    }
     
    public function setCurso(\App\Entity\Curso $curso = null)
    {
        $this->curso = $curso;

        return $this;
    }
 
    public function getCurso()
    {
        return $this->curso;
    }
     
    public function setSala(\App\Entity\Sala $sala = null)
    {
        $this->sala = $sala;

        return $this;
    }
 
    public function getSala()
    {
        return $this->sala;
    }
}
