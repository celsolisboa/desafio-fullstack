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
    public $timestamps = false;     
    
    
    public function disciplina()
    {
        return $this->belongsTo('\App\Entity\Disciplina');
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
