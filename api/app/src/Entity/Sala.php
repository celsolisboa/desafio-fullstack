<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;
 
class Sala extends Model
{
    protected $table = "sala";
    protected $hidden = array('pivot');
    public $timestamps = false;
    
    
    public function cursos()
    {
        return $this->belongsToMany('\App\Entity\Curso');
    }
}
