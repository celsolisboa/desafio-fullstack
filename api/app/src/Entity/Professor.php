<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;

 
class Professor extends Model
{
    protected $table = "professor";
    protected $hidden = array('pivot');
    public $timestamps = false;
     
    public function cursos()
    {
        return $this->belongsToMany('\App\Entity\Curso');
    }
}
