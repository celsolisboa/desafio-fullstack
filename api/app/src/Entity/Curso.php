<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
 
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
