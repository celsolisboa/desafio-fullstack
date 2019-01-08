<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;

 
class Professor extends Model
{
    protected $table = "professor";
    protected $hidden = array('pivot');
    
    private $id;    
    private $nome;
 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nome.
     *
     * @param string $nome
     *
     * @return Professor
     */
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get nome.
     *
     * @return string
     */
    public function getNome()
    {
        return $this->nome;
    }
    
    
    public function cursos()
    {
        return $this->belongsToMany('\App\Entity\Curso');
    }
}
